import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  });

  console.log(process.env.NODE_ENV);

  await app.listen(Number(process.env.PORT) || 4000);
  console.log(`Server running on: ${await app.getUrl()}`);
}
bootstrap();
