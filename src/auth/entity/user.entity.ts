import { Board } from "src/boards/entity/board.entity";
import { Entity, BaseEntity, Unique, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
    
    @OneToMany(type => Board, board => board.user, { eager: true })
    boards: Board[]
}