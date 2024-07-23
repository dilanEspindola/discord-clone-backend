import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import { UnAuthorizedException } from "../exceptions";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest<Request>();

    if (!request.headers?.authorization) throw new UnAuthorizedException();

    const token = request.headers?.authorization.split(" ")[1];

    try {
      const payload = await this.jwtService.verifyAsync(token);
      console.log("payload", payload);
      return true;
    } catch (error) {
      console.log("oops", error.message);
    }
  }
}
