import { userTable } from "@/drizzle/schemas/user_schema";
import { DRIZZLE_PROVIDE } from "@/helpers";
import { Inject } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { MySql2Database } from "drizzle-orm/mysql2";
import { createUserDto } from "./dto/create_user.dto";
import { IUserRepository } from "./interfaces";

export class UserRepository implements IUserRepository {
  constructor(@Inject(DRIZZLE_PROVIDE) private readonly db: MySql2Database) {}

  getUsers() {
    const users = this.db.select().from(userTable);
    return users;
  }

  getUserById(id: string) {
    const user = this.db.select().from(userTable).where(eq(userTable.id, id));
    return user;
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
