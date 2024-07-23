import { Module } from "@nestjs/common";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UserRepository } from "./users.repository";

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService, UserRepository],
})
export class UserModule {}
