import { NextResponse } from 'next/server';
import dbConnect from '@lib/dbConnect';
import Company from '@lib/models/Company';
import { verifyToken } from '@utils/verifyToken';
import { formatResponse } from '@utils/responseFormatter';

export async function GET(req: Request, { params }: { params: { companyId: string; employeeId: string } }) {
    await dbConnect();
  
    const { companyId, employeeId } = await params;
    const authHeader = req.headers.get('Authorization');
  
    if (!authHeader) {
      return NextResponse.json(
        formatResponse(401, 'Authorization header missing', null),
        { status: 401 }
      );
    }
  
    const token = authHeader.split(' ')[1];
    const { valid, decoded, error } = verifyToken(token);
  
    if (!valid) {
      return NextResponse.json(
        formatResponse(401, 'Invalid or expired token', error),
        { status: 401 }
      );
    }
  
    try {
      const company = await Company.findById(companyId);
  
      if (!company) {
        return NextResponse.json(
          formatResponse(404, 'Company not found', null),
          { status: 404 }
        );
      }
  
      const employee = company.employees.id(employeeId);
  
      if (!employee) {
        return NextResponse.json(
          formatResponse(404, 'Employee not found', null),
          { status: 404 }
        );
      }
  
      return NextResponse.json(
        formatResponse(200, 'Employee retrieved successfully', employee),
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        formatResponse(500, 'Error retrieving employee', error),
        { status: 500 }
      );
    }
  }
  
  export async function PUT(req: Request, { params }: { params: { companyId: string; employeeId: string } }) {
    await dbConnect();
  
    const { companyId, employeeId } = await params;
    const authHeader = req.headers.get('Authorization');
  
    if (!authHeader) {
      return NextResponse.json(
        formatResponse(401, 'Authorization header missing', null),
        { status: 401 }
      );
    }
  
    const token = authHeader.split(' ')[1];
    const { valid, decoded, error } = verifyToken(token);
  
    if (!valid) {
      return NextResponse.json(
        formatResponse(401, 'Invalid or expired token', error),
        { status: 401 }
      );
    }
  
    try {
      const updateData = await req.json();
      const company = await Company.findById(companyId);
  
      if (!company) {
        return NextResponse.json(
          formatResponse(404, 'Company not found', null),
          { status: 404 }
        );
      }
  
      const employee = company.employees.id(employeeId);
      if (!employee) {
        return NextResponse.json(
          formatResponse(404, 'Employee not found', null),
          { status: 404 }
        );
      }
  
      Object.assign(employee, updateData);
      await company.save();
  
      return NextResponse.json(
        formatResponse(200, 'Employee updated successfully', employee),
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        formatResponse(500, 'Error updating employee', error),
        { status: 500 }
      );
    }
  }

  export async function DELETE(req: Request, { params }: { params: { companyId: string; employeeId: string } }) {
    await dbConnect();
  
    const { companyId, employeeId } = await params;
    const authHeader = req.headers.get('Authorization');
  
    if (!authHeader) {
      return NextResponse.json(
        formatResponse(401, 'Authorization header missing', null),
        { status: 401 }
      );
    }
  
    const token = authHeader.split(' ')[1];
    const { valid, decoded, error } = verifyToken(token);
  
    if (!valid) {
      return NextResponse.json(
        formatResponse(401, 'Invalid or expired token', error),
        { status: 401 }
      );
    }
  
    try {
      const company = await Company.findById(companyId);
  
      if (!company) {
        return NextResponse.json(
          formatResponse(404, 'Company not found', null),
          { status: 404 }
        );
      }
  
      const employee = company.employees.id(employeeId);
      if (!employee) {
        return NextResponse.json(
          formatResponse(404, 'Employee not found', null),
          { status: 404 }
        );
      }
  
      employee.remove();
      await company.save();
  
      return NextResponse.json(
        formatResponse(200, 'Employee deleted successfully', employee),
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        formatResponse(500, 'Error deleting employee', error),
        { status: 500 }
      );
    }
  }
  