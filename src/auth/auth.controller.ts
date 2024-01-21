import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { ZodValidationPipe } from "@/common/pipes";
import { createUserDto, createUserSchema } from "@/users/dto/create_user.dto";
import { hashPassword } from "@/helpers";
import { UsersService } from "@/users/users.service";
import { JwtService } from "@nestjs/jwt";

@Controller("auth")
export class AuthController {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post("signup")
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async signup(@Body() newUser: createUserDto) {
    try {
      const hash = await hashPassword(newUser.password);
      const id = await this.usersService.createUser({
        ...newUser,
        password: hash,
      });
      console.log(id);
      const user = await this.usersService.getUserById(id);
      console.log(user);
      const accesToken = await this.jwtService.signAsync({
        sub: user.id,
        username: user.username,
      });
      return {
        user,
        accesToken,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
