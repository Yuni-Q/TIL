
# SQL

## 명령어
### DDL
테이블과 같은 데이터 구조를 정의하는데 사용하는 명령어와 그들이 실행 구조
> CREATE, ALTER, RENAME, TRUNCATE
### DML
데이터베이스에 들어있는 데이터를 조회하고 조작하는 명령어
> SELECT, INSERT, UPDATE, DELETE
### DCL
데이터베이스에 접근하고 객체들을 사용하도록 권한을 주고 회수하는 명령어
> GRANT, REVOKE
### TCL
논리적인 작업의 단위를 묶어서 DML에 조작된 결과를 작업 단위(트랜잭션)별로 제어하는 명령어
> COMMIT, ROLLBACK, SAVEPOINT

## RDB
#### 정규화
중복 제거로 인한 무결성 증가 시킵니다.
#### 반정규화
조회 시 조인을 줄여 I/O 요청을 줄입니다. ( 성능 향상 )

## ORM (Object-Relational Mapping)
> DB에 저장되어있는 데이터를 자동으로 객체화 시키기 위한 기법입니다.<br>
> JPA ( Spring )
> Django ORM ( Django )
> Express Sequelize ORM ( Node.js )

ORM만 공부하기보다는 원리를 위해 SQL을 공부해야 합니다.

## 데이터베이스 설계

### 모델링
> ER-다이어그램<br>
> 정규화 ( 1차, 2차, 3차, ... )<br>
> 관계 ( 1:1, 1:N, M:N ) <br>

## 관계형 데이터 베이스(RDBMS)
SQL
> 절차지향이 아닌 집합지향 입니다.

SQL 키워드
> TABLE<br>
> VIEW : 가상 테이블 저장 ( select가 저장 되는 느낌? ) 뷰를 많이쓰면 성능 다운 됩니다.<br>
> INDEX : B-Tree자료구조와 이진탐색으로 빠른 검색을 위해 사용 합니다.<br>
> SubQuery : Query내에 또 다른 SELECT가 존재합니다. <br>
> 윈도우 함수 : 집약함수 ( Aggregate function )<br>
> 집합 ( Union ) : 결과로 다시 Union연산 하지말고 SELECT 제대로 쓰는 것이 좋습니다.<br>
> JOIN<br>

CRUD - SQL 구문
> Create - Insert<br>
> Read - Select<br>
> Update - Update<br>
> Delete - Delete<br>

select 구문
> IN()<br>
> VIEW<br>
> 서브쿼리<br>
> 상관쿼리<br>
> UINON<br>
> OVER(PARTITION BY)<br>
> SUM MAX MIN<br>
> CASE<br>

SQL 실행 순서<br>
- FROM -> WHERE -> GROUP BY -> HAVING -> SELECT ->  ORDER BY

DBMS Architecture
- 응용 프로그램
- SQL 구문
- 쿼리 평가 엔진
  - 파서 : SQL 구문 검사
  - 옵티마이저 : 실행계획, 카탈로그 매니저
  - 플랙 실행 계획, 연산 평가 기능 : 실행 계획들을 평가
- 트랜잭션 매니저, Lock매니저, 동시실행 제어 : 트랜잭션 처리 및 락
- 접근 메서드
- 버퍼 매니저 : 버퍼, 워킹메모리( 정렬, 집합, 윈도우, 함수 ... )
- 디스크 용량 매니저 : 데이터가 어디에 어떻게 저장 될지
- Recovery 매니저 : 백업 및 복구

실행계획<br>
> 옵티마이저<br>
> 카탈로그 매니저<br>
> 성능 ( I/O 접근 )<br>

DBMS 실행계획 확인법
Oracle => Explain plan for SQL 구문 
Mysql => Explain SQL 구문 
PostgreSQL => Explain SQL 구문

조건분기
> CASE 활용<br>
> 실행계획을 상상하면서 짜라<br>
> 조건 분기를 WHERE 구로 하는 사람들은 초보자다 잘 하는 사람은 SELECT 구만으로 조건 분기를 한다.<br>

- UNION vs CASE
  - CASE를 잘 활용하면 WHERE를 두 번 쓰고 UNION을 써서 합치는 대신 SELECT문 한번으로 가능

- 조건분기 결론
  - 테이블 full(all) scan이 두번(UNION), 한번(CASE)
  - index가 구성되어 있다면? 두번의 index scan, 한번의 full(all) scan 
  - sql문을 작성시 실행계획을 생각하면서 작성하여야 한다.

반복문
> 집합 지향적으로 생각해서 쿼리문을 작성하자!<br>

결합
> JOIN<br>
> 크로스 결합,내부 결합,  외부 결합 , 자기 결합<br>
> 결합 알고리즘<br>

서브쿼리
> 데이터 I/O 비용 발생<br>
> 최적화 불가능 ( 옵티마이저 )<br>
> 연산 비용 추가<br>
> 윈도우 함수나 다른 방법으로 해결 가능<br>
> 서브쿼리 사용이 더 나은 경우도 있다<br>

인덱스
> 저장공간이 늘어남<br>
> 검색이 빠름<br>
> 삽입이 느림<br>
> 인덱스 관련 내용은 B-Tree자료구조에 대해 공부하면 나옵니다.<br>

순번

갱신

데이터 모델 등등

책 추천
> 면접 질문에 답하려면 구현이나 검색도 좋지만 책으로 공부하자!<br>
> SQL첫걸음<br>
> SQL레벨업<br>