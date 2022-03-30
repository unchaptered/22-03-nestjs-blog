// 참고 링크 : https://wikidocs.net/158579
import * as dotenv from "dotenv";
import * as path from "path";

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

dotenv.config({
  path: path.resolve(
    (process.env.NODE_ENV === "prod") ? ".prod.env" :
    (process.env.NODE_ENV === "stage") ? ".stage.env" : ".dev.env"
  )
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  await app.listen(3000);
}
bootstrap();
