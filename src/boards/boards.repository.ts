import { EntityRepository, Repository } from "typeorm";

import { User } from "../auth/entity/user.entity";

import { Board } from "./entity/board.entity";
import { BoardStatus } from "./entity/board-status.enum";
import { CreateBoardDTO } from "./dtos/create-board.dto";

@EntityRepository(Board)
export class BoardsRepository extends Repository<Board> {

    async createBoard(
        createBoardDTO: CreateBoardDTO,
        user: User
    ): Promise <Board> {

        const { title, description } = createBoardDTO;

        const board = this.create({
            title,
            description,
            status: BoardStatus.PUBLIC,
            user
        });

        try {
            await this.save(board);
        } catch(error) {
            console.log(error);
        }

        return board;
        
    }

}
