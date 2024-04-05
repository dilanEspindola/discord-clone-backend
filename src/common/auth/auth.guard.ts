import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): any {
    const request = context.switchToHttp().getRequest<Request>();

    console.log("auth-guard");

    return true;
  }
}
