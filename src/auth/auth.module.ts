import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UsersService } from "@/users/users.service";
import { UserModule } from "@/users/users.module";
import { JWT_SECRET } from "@/common/helpers";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: "24h" },
    }),
  ],
  controllers: [AuthController],
  providers: [UsersService],
})
export class AuthModule {
  constructor() {
    console.log("secret", JWT_SECRET);
  }
}
