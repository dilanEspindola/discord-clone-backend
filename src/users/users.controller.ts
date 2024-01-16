import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users.service";
import { createUserDto, createUserSchema } from "./dto/create_user.dto";
import { hashPassword } from "@/helpers";
import { ZodValidationPipe } from "@/common/pipes";

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
  @UsePipes(new ZodValidationPipe(createUserSchema))
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
