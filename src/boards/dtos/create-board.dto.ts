import { IsNotEmpty } from "class-validator";

export class CreateBoardDTO {
    
    // class-validators
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    description: string;
}