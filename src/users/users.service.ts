import { Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { createUserDto } from "./dto/create_user.dto";

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

  createUser(newUser: createUserDto) {
    return this.userRepository.createUser(newUser);
  }
}
