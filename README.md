![header](https://capsule-render.vercel.app/api?type=rect&fontColor=f5f6fa&color=192a56&height=220&section=header&text=Nest%20Board%Web&fontSize=40)
 
본 문서는 _2022년 3월 30일_ 에 작성되었습니다.

# Nest Board Backend Server

다음의 두 개의 모듈만 존재하는 연습용 Backend Server 입니다.

1. Boards/
2. Authentication/

## Folder Structure

```
root
├ src/
│ ├ boards/
│ │ ├ classes/ DTO
│ │ ├ models/ ENTITY
│ │ ├ pipes/ VALIDATION
│ │ ├ board.module.ts
│ │ ├ board.controller.ts
│ │ └ board.service.ts
│ ├ configs/
│ │ └ typeorm.config.ts (app.module.ts 에서 imports[] 안에 포함))
│ ├ app.module.ts
│ └ main.ts
├ STUDY.md
├ README.md
└ (untracted security files...)
```
