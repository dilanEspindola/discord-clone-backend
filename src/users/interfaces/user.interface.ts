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

export interface IGetUserParams {
  email?: string;
  username?: string;
}

export interface IUserRepository {
  getUsers(): Promise<IUser[]>;
  getUserById(id: string): Promise<IUser>;
  getUser(params: IGetUserParams): Promise<IUser>;
  createUser(newUser: createUserDto): Promise<string>;
}
