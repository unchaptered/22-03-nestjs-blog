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
│ ├ auth/
│ │ ├ dtos/    
│ │ ├ entity/
│ │ ├ middleware/ JwtStrategy, @GetUser
│ │ │       
│ │ ├ auth.module.ts    
│ │ ├ auth.controller.ts
│ │ ├ auth.service.ts
│ │ └ user.repository.ts  
│ │        
│ ├ boards/
│ │ ├ dtos/  
│ │ ├ entity/
│ │ ├ pipes/
│ │ │                     
│ │ ├ boards.module.ts    
│ │ ├ boards.controller.ts
│ │ ├ boards.service.ts   
│ │ └ boards.repository.ts
│ │                       
│ ├ configs/              
│ │ ├ env.config.ts       
│ │ └ typeorm.config.ts   
│ │
│ ├ app.module.ts
│ └ main.ts
│ 
├ STUDY.md
├ README.md
└ (untractked security files...)"
```