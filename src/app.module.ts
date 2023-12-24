import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "@/app.service";
import { configEnv } from "@/config";
import { UserModule } from "@/users/users.module";
import { DrizzleModule } from "./drizzle/drizzle.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.development`],
      isGlobal: true,
      load: [configEnv],
    }),
    DrizzleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}
}
