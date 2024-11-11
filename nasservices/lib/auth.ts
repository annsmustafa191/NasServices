import bcrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}


export async function verifyPassword(plainPassword: any, hashedPassword: any) {
  return bcrypt.compare(plainPassword, hashedPassword);
}