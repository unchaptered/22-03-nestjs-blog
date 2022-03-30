import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

import { Board } from './models/board.model';
import { BoardStatus } from './models/board.status.model';
import { CreateBoardDTO } from './classes/create-board.dto';

@Injectable()
export class BoardsService {

    private boardList: Board[] = [];

    getAllBoards(): Board[] {
        return this.boardList;
    }

    createBoard(createBoardDTO: CreateBoardDTO): Board {
        const { title, description } = createBoardDTO;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status:BoardStatus.PUBLIC
        };

        this.boardList.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        const found = this.boardList.find(board => board.id === id);

        if (!found) {
            throw new NotFoundException(`Can't find Board by ${id}`);
        }

        return found;
    }

    deleteBoardById(id: string): void {
        const found = this.getBoardById(id);

        this.boardList = this.boardList.filter(board => board.id !== found.id);
    }

    // updateBoardStatus (원제목)
    patchBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;

        return this.boardList[0];
    }
}
