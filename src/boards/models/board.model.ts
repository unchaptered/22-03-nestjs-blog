import { BoardStatus } from "./board.status.model";

export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus;
}