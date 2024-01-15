import { createUserDto } from "../dto/create_user.dto";

export interface IUser {
  id: string;
  visible_name: string;
  username: string;
  email: string;
  password: string;
  verified: boolean | number;
  birthdayDate: Date | string;
  createdAt: Date | string;
}

export interface IUserRepository {
  getUsers(): Promise<IUser[]>;
  getUserById(id: string): Promise<IUser>;
  getUserByUsername(username: string): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser>;
  createUser(newUser: createUserDto): Promise<string>;
}
