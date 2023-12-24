import { Module } from "@nestjs/common";
import { TypeOrmService } from "./typeorm.service";

@Module({
  imports: [],
  providers: [TypeOrmService],
})
export class TypeormModule {}
