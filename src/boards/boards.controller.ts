import { Get, Post, Delete, Controller, Body, Param, Patch, UsePipes, ValidationPipe } from '@nestjs/common';

import { Board } from './models/board.model';
import { BoardStatus } from './models/board.status.model';
import { CreateBoardDTO } from './classes/create-board.dto';

import { BoardsService } from './boards.service';
import { BoardStatusValidationPipe } from './pipes/board.status.pipe';

@Controller('boards')
export class BoardsController {

    constructor(private boardService: BoardsService) {}

    @Get()
    getAllBoard(): Board[] {
        return this.boardService.getAllBoards();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDTO: CreateBoardDTO): Board {
        return this.boardService.createBoard(createBoardDTO);
    }


    @Get("/:id")
    getBoardById(@Param("id") id: string) {
        return this.boardService.getBoardById(id);
    }

    @Delete("/:id")
    deleteBoardById(@Param("id") id: string) {
        return this.boardService.deleteBoardById(id);
    }

    // updateBoardStatus (원제목)
    @Patch("/:id/status")
    patchBoardStatus(
        @Param("id") id: string,
        @Body("status", BoardStatusValidationPipe) boardstatus: BoardStatus
    ) {
        return this.boardService.patchBoardStatus(id, boardstatus);
    }
}
