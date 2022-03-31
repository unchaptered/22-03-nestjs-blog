import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.BASE_PORT);
  Logger.log(`Server is running on ${process.env.BASE_PORT}`);
  
}
bootstrap();