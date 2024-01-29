import {
  Body,
  Controller,
  HttpException,
  Post,
  UsePipes,
} from "@nestjs/common";
import { ZodValidationPipe } from "@/common/pipes";
import { createUserDto, createUserSchema } from "@/users/dto/create_user.dto";
import { hashPassword } from "@/helpers";
import { UsersService } from "@/users/users.service";
import { JwtService } from "@nestjs/jwt";

import { UserAlreadyExists } from "./exceptions";

@Controller("auth")
export class AuthController {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post("signup")
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async signup(@Body() newUser: createUserDto) {
    try {
      const userExist = await this.usersService.getUser({
        email: newUser.email,
        username: newUser.username,
      });

      if (userExist) throw new UserAlreadyExists();

      const hash = await hashPassword(newUser.password);
      const id = await this.usersService.createUser({
        ...newUser,
        password: hash,
      });

      const user = await this.usersService.getUserById(id);

      const accesToken = await this.jwtService.signAsync({
        sub: user.id,
        username: user.username,
      });
      return {
        user,
        accesToken,
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
