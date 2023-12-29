import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { DrizzleModule } from "@/drizzle/drizzle.module";

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [],
})
export class UserModule {}
