import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  });

  const config = new DocumentBuilder()
    .setTitle("Discord Api")
    .setDescription("Discord clone API ")
    .setVersion("1.0")
    .addTag("discord")
    .build();

  const doc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/doc", app, doc);

  await app.listen(Number(process.env.PORT) || 4000);
  console.log(`Server running on: ${await app.getUrl()}`);
}
bootstrap();
