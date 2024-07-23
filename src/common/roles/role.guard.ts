import { Reflector } from "@nestjs/core";
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { Request } from "express";
import { Role } from "./role.decorator";
import { UnAuthorizedException } from "@/common";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<Role[]>("roles", [
      context.getHandler(),
    ]);
    const isAdmin = roles.includes("admin");
    const request = context.switchToHttp().getRequest<Request>();

    if (!roles) throw new UnAuthorizedException();

    if (!isAdmin) throw new UnAuthorizedException();

    console.log("role-guard", roles);
    return true;
  }
}
