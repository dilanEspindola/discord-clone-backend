import { HttpException, HttpStatus } from "@nestjs/common";

export class UserAlreadyExists extends HttpException {
  constructor() {
    super("USER_ALREADY_EXISTS", HttpStatus.CONFLICT);
  }
}

export class UserNotFound extends HttpException {
  constructor() {
    super("USER_NOT_FOUND", HttpStatus.NOT_FOUND);
  }
}

export class InvalidCredentials extends HttpException {
  constructor() {
    super("INVALID_CREDENTIALS", HttpStatus.BAD_REQUEST);
  }
}
