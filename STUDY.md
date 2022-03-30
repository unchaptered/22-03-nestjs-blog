# Introduce

본 문서는 _2022년 3월 29일_ 에 최초 작성되었습니다.

자세한 수정 내역은 **## Log** 를 참고해주세요.

## Log

| 일자 | 파트 | 상세 내용 |
| :---: | :--- | :-------- |
| _\`22년 3월 29일_ | Nest Usage<br>Nest Thoery<br>Databases | Nest.JS Settings, Command<br>Theory about DTO, Pipe<br>PostgreSQL 14.1, pgAdmin 4, Install to use|
| _\`22년 3월 30일_ | Log Part<br>TypeORM | Log about fix STUDY.md<br>TypeORM's structure to use |

## Nest

### Installation

난수화 BoardDTO.id 를 생성하기 위한 라이브러리 (유니크 값 반환)

1. npm install uid --save
2. npm install @types/uuid --save

@types 는 타입을 체크하기 위해서 로컬 환경에서 
필요합니다.

### Command

다음의 명령어들이 일반적으로 쓰일 만하며, **추가적인 명령어는 nest -help 로 확인**하면 됩니다.

1. nest g module 모듈_이름
2. nest g service 서비스_이름
3. nest g controller 컨트롤러_이름
4. nest g pipe 파이프_이름
5. nest g class 클래스_이름
6. nest g interface 인터페이스_이름

## Nest Thoery

### DTO

**Data Transfer Object 란,**

클라이언트 및 서버 간에 데이터를 주고 받을 때 사용하는 오브젝트입니다.

**일반적으로 Class 를 사용합니다.**

클래스는 인터페이스와 다르게, 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 더 유용합니다.

그래서 클래스를 사용해서 DTO 를 작성합니다.

### Pipe

Pipe 는 **데이터 전송** 및 **유효성 검사** 에 사용됩니다.

파이프는 @Injectable() 데코레이터로 주석이 달린 클래스입니다.

파이프는 data transformation 과 data validation 을 위해서 사용됩니다.

파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동합니다.

Nest 는 메소드가 호출 되기 직전에 파이프를 삽입하고, 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동합니다.

#### Pipe 종류

1. Handler level Pipes
2. Parameter level Pipes
3. Global level Pipes
4. Built-in Pipes

#### Handler level Pipes

**Handler, Controller 메서드 레벨에서**

@UsePipes() 데코레이터를 이용해서 사용할 수 있습니다.

이 파이프는 모든 (title, description) 과 같은 모든 파라미터에 사용됩니다.

#### Parameter level Pipes

**Handler, Controller 메서드의 파라미터 레벨에서**

@Body("변수명", 파이프라인_이름) 과 같이 사용할 수 있습니다.

#### Global level Pipes

**Application 내부의 모든 영역에서**

클라이언트에 들어오는 모든 영역에 적용이 됩니다.

가장 상단의 영역인 main.ts 에 적용하면 됩니다.

#### Built-in Pipes

Nest.JS 에 기본적으로 사용할 수 있게 만들어놓은 6가지 파이프

1. ValidationPipe
2. ParseIntPipe
3. ParseBoolPipe
4. ParseArrayPipe
5. ParseUUIDPipe
6. DefaultValuePipe

#### Library Pipes

Nest.JS 의 매개변수값으로 빈 문자열이 넘어와서 빈 내용의 데이터가 생성되는 것을 막는 기능

[class-validators DOCS](https://github.com/typestack/class-validator#manual-validation)

1. class-validator
2. class-transformer

#### Custom Pipes

**인터페이스 PipeTransform 을 사용해서,** 

모든 Pipe 들이 공통으로 가지는 transform() 메소드를 오버라이드 하면 됩니다.

이 메소드는 Nest.JS 가 인자들을 처리하기 위해 사용됩니다.

```cmd
nest g pi BoardStatusValidationPipe
```

##### trnasofrm()

이 메소드는 2개의 파라미터를 가집니다.

```typescript
transform(value: any, metadata: ArgumentMetadata) {
    return value;
}
```

1. value 는 처리가 된 인자의 값이다.
2. metadata 는 인자에 대한 데이터를 포획한 객체이다.

## Database

본 프로젝트에서는 다음을 사용할 것입니다.

1. RDBMS | PostgreSQL 14.1
2. DB GUI | pgAdmin 4
3. ORM | TypeORM

```cmd
npm install pg typeorm @nestjs/typeorm --save
```

**[공식 문서](https://docs.nestjs.com/recipes/sql-typeorm#sql-typeorm) 를 참고해주세요.**

### PostgreSQL

**Database/GUI 로는 각각 PostgreSQL 14.1 / pgAdmin 4 을 사용하였습니다.**

별도의 셋팅 과정은 이미 [**Velog - unchaptered / DB PostgreSQL 시리즈**](https://velog.io/@unchapterd/series/DB-PostgreSQL) 에서 진행하였으니 참고부탁드립니다.


### ORM

**ORM, Object Relational Mapping, 객체 관계 매핑은**

객체와 RDBMS 의 데이터를 자동으로 변형 및 연결하는 기능을 제공해줍니다.

그 중에서도 우리는 **TypeORM** 을 사용할 것입니다.

#### 장단점

모델을 기반으로 데이터베이스 체계를 자동으로 생성합니다.
데이터베이스에서 객체를 쉽게 삽입, 업데이트 및 삭제할 수 있습니다.
테이블 간의 매핑(1:1, 1:M, M:M) 을 만듭니다.
간단한 CLI 명령을 제공합니다.

TypeORM 은 간단한 코딩으로 ORM 프레임워크를 사용하기 쉽습니다.
TypeORM 은 다른 모델과 쉽게 통합됩니다.

#### TypeORM vs Sequelize

#### ORM vs SQL

재밌는 글이 있어서 포스트 업 해두려고 한다.

[왜 Nodejs ORM을 쓰지 말아야 할까](https://yceffort.kr/2021/07/dont-use-nodjs-orm)

## TypeORM

### Decorator

기본적으로, 다음과 같은 Decorator 가 존재한다.

1. @Entity()
2. @PrimaryGeneratedColumn()
3. @Column()