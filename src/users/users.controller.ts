import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { IGetUserParams } from "./interfaces";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get("")
  async getUsers() {
    try {
      const users = await this.usersService.getUsers();

      return users;
    } catch (error) {
      console.log(error.message);
      throw new HttpException(
        "Se rompio esta mrd",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get("/id/:id")
  async getUserById(@Param("id", ParseUUIDPipe) id: string) {
    return await this.usersService.getUserById(id);
  }

  @Get("/find")
  async getUser(@Query() query: IGetUserParams) {
    console.log(query);
    return this.usersService.getUser(query);
  }
}
