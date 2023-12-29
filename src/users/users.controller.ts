import { Controller, Get, Inject } from "@nestjs/common";
import { MySql2Database } from "drizzle-orm/mysql2";
import { userTable } from "@/drizzle/schemas";
import { DRIZZLE_PROVIDE } from "@/helpers";

@Controller("users")
export class UsersController {
  constructor(@Inject(DRIZZLE_PROVIDE) private readonly db: MySql2Database) {}

  @Get("")
  async getUsers() {
    const users = this.db.select().from(userTable);
    return users;
  }
}
