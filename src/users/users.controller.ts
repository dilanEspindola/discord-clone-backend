import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Query,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { IGetUserParams } from "./interfaces";
import { Roles, RoleGuard, AuthGuard } from "@/common";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get("")
  @UseGuards(AuthGuard, RoleGuard)
  @Roles("admin")
  async getUsers() {
    try {
      const users = await this.usersService.getUsers();

      return users;
    } catch (error) {
      console.log(error.message);
      throw new HttpException(
        "SOMETHING_WENT_WRONG",
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
