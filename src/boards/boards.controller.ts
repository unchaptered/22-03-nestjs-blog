// System

import {
    Controller, Get, Post, Patch, Delete, Body, Param,
    UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from "@nestjs/common";
    import { AuthGuard } from "@nestjs/passport";

// Handler

import { BoardsService } from "./boards.service";

// Entity

import { User } from "src/auth/entity/user.entity";

import { Board } from "./entity/board.entity";
import { BoardStatus } from "./entity/board-status.enum";
import { CreateBoardDTO } from "./dtos/create-board.dto";

import { GetUser } from "../auth/middleware/user.middleware";
import { BoardStatusValidationPipe } from "./pipes/board.status.pipe";

@Controller("boards")
@UseGuards(AuthGuard())
export class BoardsController {

    constructor( private boardsService: BoardsService ) {}

    @Get()
    getALlBoards(
        @GetUser() user: User
    ): Promise<Board[]> {
        return this.boardsService.getAllBoards(user);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDTO: CreateBoardDTO,
        @GetUser() user: User
    ): Promise<Board> {
        return this.boardsService.createBoard(createBoardDTO, user);
    }

    @Get("/:id")
    getBoardById(@Param("id") id: number): Promise<Board> {
        return this.boardsService.getBoardById(id);
    }

    @Delete("/:id")
    deleteBoardById(
        @Param("id") id: number,
        @GetUser() user: User
    ): Promise<void> {
       this.boardsService.deleteBoardById(id, user);
       return;
    }

    @Patch("/:id/status")
    patchBoardStatus(
        @Param("id", ParseIntPipe) id: number,
        @GetUser() user: User,
        @Body("status", BoardStatusValidationPipe) boardstatus: BoardStatus
    ) {
        return this.boardsService.patchBoardStatus(id, boardstatus);
    }
}
