import { HttpException, HttpStatus } from "@nestjs/common";

export class UnAuthorizedException extends HttpException {
  constructor() {
    super("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
  }
}
