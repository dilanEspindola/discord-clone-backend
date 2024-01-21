import { userTable } from "@/drizzle/schemas/user_schema";
import { DRIZZLE_PROVIDE } from "@/helpers";
import { Inject } from "@nestjs/common";
import { eq, or } from "drizzle-orm";
import { MySql2Database } from "drizzle-orm/mysql2";
import { v4 as uuid } from "uuid";
import { createUserDto } from "./dto/create_user.dto";
import { IGetUserParams, IUserRepository } from "./interfaces";

export class UserRepository implements IUserRepository {
  constructor(@Inject(DRIZZLE_PROVIDE) private readonly db: MySql2Database) {}

  getUsers() {
    const users = this.db.select().from(userTable);
    return users;
  }

  async getUserById(id: string) {
    const query = this.db.select().from(userTable).where(eq(userTable.id, id));
    const user = await query.execute();
    return user[0];
  }

  async getUser({ email, username }: IGetUserParams) {
    const query = this.db
      .select()
      .from(userTable)
      .where(or(eq(userTable.username, username), eq(userTable.email, email)));
    const user = await query.execute();
    return user[0];
  }

  async createUser(newUser: createUserDto) {
    const id = uuid();
    await this.db.insert(userTable).values({ id, ...newUser });
    return id;
  }
}
