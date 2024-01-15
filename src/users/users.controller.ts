import { Body, Controller, Get, Post } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users.service";
import { createUserDto } from "./dto/create_user.dto";
import { hashPassword } from "@/helpers";

@Controller("users")
export class UsersController {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  @Get("")
  async getUsers() {
    return [];
  }

  @Post("")
  async signup(@Body() newUser: createUserDto) {
    try {
      const hash = await hashPassword(newUser.password);
      const id = await this.usersService.createUser({
        ...newUser,
        password: hash,
      });
      return await this.usersService.getUserById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
