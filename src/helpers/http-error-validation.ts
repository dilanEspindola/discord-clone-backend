import { HttpStatus } from "@nestjs/common";

type Matcher = {
  [key: string]: { message: string; statusCode: number };
};

export const httpErrorValidation = (
  errorMessage: string,
  statusCode: number,
) => {
  const matcher: Matcher = {
    USER_ALREADY_EXISTS: { message: errorMessage, statusCode },
  };

  const defaultError = {
    message: "SOMETHING_WENT_WRONG",
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  };

  return matcher[errorMessage] ?? defaultError;
};
