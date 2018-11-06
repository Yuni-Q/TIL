# sequlizeCli

# 설치
```bash
npm install -g sequelize-cli
```

# 사용
```bash
npm install sequelize
npm install mysql2
```
> 프로젝트에 sequslize와 mysql2를 설치해 줍니다.

```bash
sequelize init
```
> 4개의 파일 및 폴더가 생성 됩니다.<br>
> Created "config/config.json"<br>
> Successfully created models folder at "/Users/yunheelee/Documents/test/exampleExpress/models".<br>
> Successfully created migrations folder at "/Users/yunheelee/Documents/test/exampleExpress/migrations".<br>
> Successfully created seeders folder at "/Users/yunheelee/Documents/test/exampleExpress/seeders".<br>

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "soso",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
> 로컬호스트에 있는 mysql을 사용합니다.<br>
> datavase에 원하는 이름을 입력 합니다.<br>

```bash
sequelize db:create
```
> 데이터 베이스가 생성 됩니다.<br>

```bash
sequelize model:generate --name [tabelName] --attributes [칼럼이름]:[칼럼타입]
```
> migrate 파일 생성

```bash
sequelize db:migrate
```
> table을 생성 합니다.<br>
> sequelize db:migrate:status로 현재 migrate 상태를 확인 할 수 있습니다.<br>
> sequelize db:migrate:undo로 마지막 migrate를 취소 할 수 있습니다.<br>