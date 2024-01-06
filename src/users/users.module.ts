import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { UsersService } from "./users.service";
import { UserRepository } from "./users.repository";

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UserModule {}
