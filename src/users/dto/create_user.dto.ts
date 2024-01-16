import { z } from "zod";

export interface createUserDto {
  visible_name: string;
  username: string;
  email: string;
  password: string;
  verified: boolean;
  birthdayDate: Date;
}

export const createUserSchema = z.object({
  visible_name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  verified: z.boolean().optional(),
  birthdayDate: z.string(),
});
