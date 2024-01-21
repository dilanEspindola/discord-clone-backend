import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { UsersService } from "@/users/users.service";
import { UserModule } from "@/users/users.module";

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [UsersService],
})
export class AuthModule {}
