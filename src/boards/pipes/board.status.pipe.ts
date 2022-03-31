import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../entity/board-status.enum";

@Injectable()
export class BoardStatusValidationPipe implements PipeTransform {

  // #4.5 커스텀 파이프를 이용한 유효성 체크
  readonly StateOptions = [
    BoardStatus.PRIVATE,
    BoardStatus.PUBLIC
  ]

  // transform(value: any, metadata: ArgumentMetadata)
  transform(value: any) {

    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StateOptions.indexOf(status);

    return index !== -1;
  }
}
