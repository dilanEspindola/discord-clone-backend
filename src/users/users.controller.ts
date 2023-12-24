import { DrizzleService } from "@/drizzle/drizzle.service";
import { profileTable, userTable } from "@/drizzle/schemas";
import { Controller, Get } from "@nestjs/common";
import { eq } from "drizzle-orm";

@Controller("users")
export class UsersController {
  constructor(private readonly dbService: DrizzleService) {}

  @Get("")
  async getUsers() {
    const users = await this.dbService
      .db()
      .select()
      .from(userTable)
      .rightJoin(profileTable, eq(userTable.id, profileTable.userId));
    return users;
  }
}
