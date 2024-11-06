import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@lib/dbConnect';
import User from '@lib/models/User';
import Subscription from '@lib/models/Subscription';
import { hashPassword } from '@lib/auth';
import { log } from 'console';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { email, password, username, role, subscriptionId } = await req.json();
log(req.body);
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      role,
      subscriptionId,
    });
    await newUser.save();

    return Response.json({ message: 'User created successfully', user: newUser }, { status: 201 });
  } catch (error) {
    return Response.json({ message: 'Error on creating user', error: 'errrr' }, { status: 500 });
  }
}
