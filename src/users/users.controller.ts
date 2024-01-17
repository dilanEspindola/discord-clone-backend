import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UsePipes,
  ParseUUIDPipe,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
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
    try {
      const users = await this.usersService.getUsers();

      throw new Error("erro");

      return users;
    } catch (error) {
      console.log(error.message);
      throw new HttpException(
        "Se rompio esta mrd",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(":id")
  async getUserById(@Param("id", ParseUUIDPipe) id: string) {
    return await this.usersService.getUserById(id);
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
      console.log(error);
    }
  }
}
