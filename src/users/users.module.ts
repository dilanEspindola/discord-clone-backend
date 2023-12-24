import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { DrizzleService } from "@/drizzle/drizzle.service";

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [DrizzleService],
})
export class UserModule {}
