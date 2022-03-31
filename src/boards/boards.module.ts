import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthModule } from "../auth/auth.module";

import { BoardsService } from "./boards.service";
import { BoardsController } from "./boards.controller";
import { BoardsRepository } from "./boards.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([ BoardsRepository ]),
    AuthModule
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
