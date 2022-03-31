import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { BoardsRepository } from "./boards.repository";

import { User } from "../auth/entity/user.entity";

import { Board } from "./entity/board.entity";
import { BoardStatus } from "./entity/board-status.enum";
import { CreateBoardDTO } from "./dtos/create-board.dto";
import { query } from "express";

@Injectable()
export class BoardsService {

    constructor(
        @InjectRepository(BoardsRepository)
        private boardsRepository: BoardsRepository
    ) {}

    async getAllBoards(
        user: User
    ): Promise<Board[]> {
        
        const queryBuilder = this.boardsRepository.createQueryBuilder("board");
        queryBuilder.where("board.userId = userId", { userId: user.id });

        const boards = await queryBuilder.getMany();

        return boards;

    }

    createBoard(
        createBoardDTO: CreateBoardDTO,
        user: User
    ): Promise <Board> {

        return this.boardsRepository.createBoard(createBoardDTO, user);

    }

    async getBoardById(id: number): Promise<Board> {

        const found = await this.boardsRepository.findOne(id);
        if (!found) throw new NotFoundException(`Can"t find Board by ${id}`);

        return found;
        
    }

    async deleteBoardById(
        id: number,
        user: User
    ): Promise<void> {

        /* delete() 와 remove() 차이
            1. remove() 는 존재하는 아이템을 삭제, 없으면 404
            2. delete() 는 존재하는 아이템을 삭제, 없어도 에러 X

            즉, remove() 를 사용하려면 해당 data 의 존재 유무 사전 파악이 필수
        */ 

        const result = await this.boardsRepository.delete({ id, user });
        if (result.affected === 0 ) throw new NotFoundException(`Can"t find Board by ${id}`);
        return;
    }

    async patchBoardStatus(id: number, status: BoardStatus): Promise<Board> {

        const board = await this.getBoardById(id);
        board.status = status;
        await this.boardsRepository.save(board);

        return board;

    }

}
