// src/app/api/companies/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Company from '@lib/models/Company';
import User from '@lib/models/User';
import { formatResponse } from '@utils/responseFormatter';

export async function POST(req: Request) {
  await dbConnect();
  
  try {
    const { ownerID, agentID, name, address, city, country, commercialLicenseNumber, licenseExpiryDate, documents } = await req.json();

    // Create a new company
    const newCompany = new Company({
      name,
      address,
      city,
      country,
      commercialLicenseNumber,
      licenseExpiryDate,
      ownerID,
      agentID,
      documents
    });

    await newCompany.save();

    // Update the users to link with the company
    await User.findByIdAndUpdate(ownerID, { $push: { companys: newCompany._id } });
    if (agentID) {
      await User.findByIdAndUpdate(agentID, { $push: { companys: newCompany._id } });
    }

    return NextResponse.json(
      formatResponse(201, 'Company created successfully', newCompany),
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error creating company', error),
      { status: 500 }
    );
  }
}
