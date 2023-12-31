import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { createUserDto } from "./dto/create_user.dto";
import { hashPassword } from "@/helpers";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get("")
  async getUsers() {
    return [];
  }

  @Post("")
  async signup(@Body() newUser: createUserDto) {
    try {
      const hash = await hashPassword(newUser.password);
      return this.usersService.createUser({ ...newUser, password: hash });
    } catch (error) {
      console.log(error);
    }
  }
}
