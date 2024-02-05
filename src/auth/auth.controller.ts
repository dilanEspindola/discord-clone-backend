import {
  Body,
  Controller,
  HttpException,
  Post,
  UsePipes,
} from "@nestjs/common";
import { ZodValidationPipe } from "@/common/pipes";
import { JwtService } from "@nestjs/jwt";
import { createUserDto, createUserSchema } from "@/users/dto/create_user.dto";
import { hashPassword, httpErrorValidation } from "@/helpers";
import { UsersService } from "@/users/users.service";
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
      const { message, statusCode } = httpErrorValidation(
        error.message,
        error.status,
      );
      throw new HttpException(message, statusCode);
    }
  }
}
