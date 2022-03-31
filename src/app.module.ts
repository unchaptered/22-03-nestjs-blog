import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { envConfig } from "./configs/env.config";
import { typeORMConfig } from "./configs/typeorm.config";

import { AuthModule } from "./auth/auth.module";
import { BoardsModule } from "./boards/boards.module";

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
