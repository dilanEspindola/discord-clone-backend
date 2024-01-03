import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { UsersService } from './users.service';

@Module({
  imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
