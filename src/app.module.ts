import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { configEnv } from "@/config";
import { UserModule } from "@/users/users.module";
import { DrizzleModule } from "./drizzle/drizzle.module";
import { UserModule } from './user/user.module';

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
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
