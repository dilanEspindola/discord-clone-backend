import { hash, compare } from "bcryptjs";

export const hashPassword = async (password: string) => {
  return await hash(password, 8);
};

export const comparePassword = async (password: string, hash: string) => {
  return await compare(password, hash);
};
