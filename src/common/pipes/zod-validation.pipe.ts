import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    try {
      this.schema.parse(value);
      return value;
    } catch (error) {
      throw new BadRequestException("Invalid Data");
    }
  }
}
