import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { typeORMConfig } from "./configs/typeorm.config";

import { AuthModule } from "./auth/auth.module";
import { BoardsModule } from "./boards/boards.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
