import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import * as config from "config";


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const serverConfig = await config.get('server');
  const port = serverConfig.port;

  await app.listen(port);
  Logger.log(`Server is running on ${port}`);
  
}
bootstrap();