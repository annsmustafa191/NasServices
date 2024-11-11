// src/app/api/companies/user/[userId]/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Company from '@lib/models/Company';
import { formatResponse } from '@utils/responseFormatter';
import { verifyToken } from '@utils/verifyToken';

export async function GET(req: Request, { params }: { params: { userId: string } }) {
  await dbConnect();

  const { userId } = params;
  const authHeader = req.headers.get('Authorization');

  if (!authHeader) {
    return NextResponse.json(
      formatResponse(401, 'Authorization header missing', null),
      { status: 401 }
    );
  }

  const token = authHeader.split(' ')[1]; // Expecting "Bearer <token>"

  const { valid, decoded, error } = verifyToken(token);

  if (!valid) {
    return NextResponse.json(
      formatResponse(401, 'Invalid or expired token', error),
      { status: 401 }
    );
  }

  try {
    // Find all companies where the user is either an owner or an agent
    const companies = await Company.find({
      $or: [{ ownerID: userId }, { agentID: userId }],
    });

    if (companies.length === 0) {
      return NextResponse.json(
        formatResponse(404, 'No companies found for this user', null),
        { status: 404 }
      );
    }

    return NextResponse.json(
      formatResponse(200, 'Companies retrieved successfully', companies),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      formatResponse(500, 'Error retrieving companies', { error: error }),
      { status: 500 }
    );
  }
}
