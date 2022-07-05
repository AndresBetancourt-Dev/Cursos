import { hash, compare } from "bcryptjs";

const SALTING_ROUNDS = 12;

export async function hashPassword(password) {
  const encryptedPassword = await hash(password, SALTING_ROUNDS);
  return encryptedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
