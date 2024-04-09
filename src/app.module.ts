import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { configEnv } from "@/config";
import { UserModule } from "@/users/users.module";
import { DrizzleModule } from "./drizzle/drizzle.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `${
          process.env.NODE_ENV.includes("development")
            ? ".env.development"
            : ".env.production"
        }`,
      ],
      isGlobal: true,
      load: [configEnv],
    }),
    DrizzleModule,
    UserModule,
    AuthModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
