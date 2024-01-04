import { Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { createUserDto } from "./dto/create_user.dto";

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  createUser(newUser: createUserDto) {
    return this.userRepository.createUser(newUser);
  }
}
