import { HttpException, HttpStatus } from "@nestjs/common";

export class UserAlreadyExists extends HttpException {
  constructor() {
    super("USER_ALREADY_EXISTS", HttpStatus.CONFLICT);
  }
}
