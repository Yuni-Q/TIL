
# 분산 데이터베이스 환경에서의 모델링
마스터 / 슬레이브 데이터 베이스 분산
> 마스터는 쓰기 가능<br>
> 슬레이브는 읽기 가능<br>
> 샤딩 : id로 구분, 수평파티셔닝<br>
> 파티셔닝 : 수직파티셔닝<br>

N사의 댓글 시스템
> 스포츠경기등에서 채팅이 실제로는 댓글을 refresh하는 것<br>
> 정렬은 RDB가 빠름<br>
> 검색은 NoSQL이 빠름<br>
> RDB로 NoSQL의 ID를 저장하여 사용합니다.<br>

참조 : [슬라이드셰어](https://www.slideshare.net/charsyam2/webservice-scaling-for-newbie?utm_source=gaerae.com&utm_campaign=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%8A%A4%EB%9F%BD%EB%8B%A4&utm_medium=social&fbclid=IwAR2m0ztKwQ-d1PE3RS822dup1ayBRV5BmgWpj7Btfi5FKu-3YPj3nA70ecA) 

# 트랜젝션

DB에서 Isolation Level구분하기
> 먼저 isolation level이란 트랜잭션에서 일관성이 없는 데이터를 허용하도록 하는 수준을 의미합니다.<br>

실습
> Read Uncommitted Isolation Level은 Rock이 걸리지 않아 데이터를 바로 읽어 올 수 있습니다.<br>
> Serializable Isolation Level은 트랜잭션이 완련 될 때까지 기다려야 합니다.<br>

Level
Read Uncommitted Isolation Level
> SELECT 문장을 수행하는 경우 해당 데이터에 Shared Lock이 걸리지 않는 Level입니다. 따라서, 어떤 사용자가 A라는 데이터를 B라는 데이터로 변경하는 동안 다른 사용자는 B라는 아직 완료되지 않은(Uncommitted 혹은 Dirty) 데이터 B를 읽을 수 있습니다.<br>

Read Committed Isolation Level
> SQL Server가 Default로 사용하는 Isolation Level입니다. 이 Level에선 SELECT 문장이 수행되는 동안 해당 데이터에 Shared Lock이 걸립니다. 그러므로, 어떠한 사용자가 A라는 데이터를 B라는 데이터로 변경하는 동안 다른 사용자는 해당 데이터에 접근할 수 없습니다.<br>

Repeatable Read Isolation Level
트랜잭션이 완료될 때까지 SELECT 문장이 사용하는 모든 데이터에 Shared Lock이 걸리므로 다른 사용자는 그 영역에 해당되는 데이터에 대한 수정이 불가능합니다. 가령, Select col1 from A where {condition}을 수행하였고 이 조건에 해당하는 데이터가 2건이 있는 경우(col1=1과 5) 다른 사용자가 col1이 1이나 5인 Row에 대한 UPDATE이 불가능합니다. 하지만, 이 조건에 해당하는 Row를 INSERT하는 것은 가능합니다. 따라서 동일 트랜잭션에서 Read되는 데이터 수가 달라질 수 있습니다.<br>

Serializable Isolation Level
트랜잭션이 완료될 때까지 SELECT 문장이 사용하는 모든 데이터에 Shared Lock이 걸리므로 다른 사용자는 그 영역에 해당되는 데이터에 대한 수정 및 입력이 불가능합니다. 예를 들어, Repeatable Read의 경우 조건을 만족하는 데이터가  INSERT는 가능하였습니다. 하지만 이 Level에서는 INSERT 작업도 허용하지 않습니다.<br>

Isolation Level에 따라 나타나는 현상

Dirty Read
> 어떤 트랜잭션에서 아직 실행이 끝난지 않은 다른 트랜잭션에 의한 변경 사항을 보게 되는 되는 경우를 dirty read 라고 합니다. 만약 원래 트랜잭션에서 그 변경 사항을 롤백하면 그 데이터를 읽은 트랜잭션은 dirty 데이터를 가지고 있다고 말합니다.<br>

Repeatable Read
> 어떤 트랜잭션에서 같은 질의를 사용했을 때 질의를 아무리 여러번 해도 그리고 다른 트랜잭션에서 아무리 여러 번 그 행을 변경해도 항상 같은 데이터만 읽어드리는 경우를 repeatable read 라고 합니다. 즉 repeatable read 가 요구되는 트랜잭션에서는 다른 트랜잭션에 의한 변경 사항을 볼 수가 없습니다. 그러한 변경 사항을 보고 싶으면 어플리케이션에서 트랜잭션을 새로 시작해야 합니다.<br>

Phantom read
> phantom read 는 다른 트랜잭션에 의한 변경 사항으로 인해 현재 사용 중인 트랜잭션의 WHERE 절의 조건에 맞는 새로운 행이 생길 수 있는 경우에 관한 것입니다. 예를 들어, 잔고가 $100 미만인 계좌를 모두 찾아내는 트랜잭션에 있고, 이 트랜잭션에서 그 데이터를 두 번 읽는다고 가정합시다. 처음 데이터를 읽어들이고 난 후에 다른 트랜잭션에서 잔고가 $0인 계좌를 새로 만들면 이 계좌도 잔고가 $100 이하라는 조건에 맞게 됩니다. 트랜잭션 격리 수준(Transaction Isolation Level)에서 phantom read 를 지원하면 새로운 “유령(phantom)”행이 나오지만 지원하지 않으면 새로 생긴 행을 볼 수 없습니다.<br>

참조 : [코딩하는오징어](http://effectivesquid.tistory.com/entry/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4-Isolation-Level?category=650726)
