import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { DrizzleModule } from "@/drizzle/drizzle.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UserRepository } from "./users.repository";

@Module({
  imports: [
    DrizzleModule,
    JwtModule.register({
      global: true,
      secret: <string>process.env.JWT_SECRET,
      signOptions: { expiresIn: "10m" },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UserModule {}
