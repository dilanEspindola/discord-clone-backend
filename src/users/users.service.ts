import { Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { createUserDto } from "./dto/create_user.dto";
import { IGetUserParams } from "./interfaces";

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  getUsers() {
    return this.userRepository.getUsers();
  }

  getUserById(id: string) {
    const user = this.userRepository.getUserById(id);
    return user;
  }

  getUser(params: IGetUserParams) {
    const user = this.userRepository.getUser(params);
    return user;
  }

  createUser(newUser: createUserDto) {
    return this.userRepository.createUser(newUser);
  }
}
