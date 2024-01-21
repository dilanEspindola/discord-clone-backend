import { Controller, Get, Param, ParseUUIDPipe, Query } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "./users.service";
import { IGetUserParams } from "./interfaces";

@Controller("users")
export class UsersController {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  @Get("")
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Get("/id/:id")
  async getUserById(@Param("id", ParseUUIDPipe) id: string) {
    return await this.usersService.getUserById(id);
  }

  @Get("/find")
  async getUser(@Query() query: IGetUserParams) {
    return await this.usersService.getUser(query);
  }
}
