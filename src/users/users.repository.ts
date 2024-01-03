import { userTable } from "@/drizzle/schemas/user_schema";
import { DRIZZLE_PROVIDE } from "@/helpers";
import { Inject } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { MySql2Database } from "drizzle-orm/mysql2";
import { createUserDto } from "./dto/create_user.dto";

export class UserRepository {
  constructor(@Inject(DRIZZLE_PROVIDE) private readonly db: MySql2Database) {}

  getUsers() {
    return this.db.select().from(userTable);
  }

  getUserById(id: string) {
    return this.db.select().from(userTable).where(eq(userTable.id, id));
  }

  getUserByUsername(username: string) {
    return this.db
      .select()
      .from(userTable)
      .where(eq(userTable.username, username));
  }

  getUserByEmail(email: string) {
    return this.db.select().from(userTable).where(eq(userTable.email, email));
  }

  createUser(newUser: createUserDto) {
    return this.db.insert(userTable).values(newUser);
  }
}
