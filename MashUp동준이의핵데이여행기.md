서버 아키텍쳐  
MSA vs MONOLITHIC  
MSA 장점(피드 시스템 기준)  
구독 서버와 피드 서버를 구성 하였을 경우 보통의 경우 피드서버가 훨씬 많은 트래픽을 처리한다. 그렇기 때문에 피드 서버의 증설을 한다면 피드 서버만 증설을 하면 된다.  
만약 MONOLITHIC로 하나의 서버에 구독 ,피드로 구축한다면 피드에 대한 트래픽을 줄이기 위해 서버를 증설하게 된다면 구독, 피드 세트로 서버를 증설 하기 때문에 서버 자원의 낭비가 생긴다.  

캐싱  
레디스, 캐싱어노테이션(스프링기준)  

MSA  
메시징큐, rabbitMQ  

만명 구독자를 가진 페이지 또는 사용자가 게시글을 쓸경우 어떤 방식으로 구독자들에게 피드를 날리면 될까???  
AWS SQS를 활용하여 Batch에서 비동기적으로 작업을 처리한다.  

스웨거(API문서화)  

CI/CD 배포(젠킨스를 써보면 좋을꺼 같다/핵데이때는 트래비스를 쓰자)  

분산디비  
Master : 읽기 쓰기 가능
Slave : 읽기 가능
샤딩은 ... 잘 모르겠다 ... 

대부분의 학생이나 취준생(신입지원자)들을 보면 디비서버 하나도 셋팅 할 줄 모른다.  
(핵데이때 디비서버 셋팅하라고 하니까 아무도 못 했다…라는 썰이 있다)  

얕고 넓은 지식보다는 하나라도 제대로 깊게 아는것도 매우 중요하다  
(예 : 스프링 autowired 어노테이션을 붙였을 경우 스프링이 어떠한 방법으로 로직(의존성주입)하는지 확인해봐라 매우 간단한것데 대부분 그냥 쓰고 있다)  

GitHub  
GitFlow 방식으로 개발을 해봐라  

Java  
자바8을 쓸 줄 아냐? 스트림, comparator, 람다등 공부 해보자  

Spring  
네이버에서는 아직 까지 spring을 java로 개발한다. kotlin를 거의 쓰지 않는다.  
안드로이드의 경우는 kotlin을 많이 쓴다.  

새로운 기술 및 버전업이 되었는데 왜 적용을 못 할까?  
지금 현재 서비스중인 시스템에 새로운 기술(프레임워크, 개발방식 등) 및 버전 업을 적용 시키기는 어렵다. 이미 안전적인 서비스이고 새롭게 개발하더라도 지금 현재 서비스중 시스템과 같은 환경(대규모트래픽, 시스템환경 등)을 똑같이 적용해서 성능적으로 우수하다는걸 증명해야 하기 때문에 쉽지가 않다.   

백엔드 개발자는 뭐라고 생각하는가?  
요즘은 뭐라고 딱 정하기가 힘들다 많은 부분을 백엔드 개발자가 하고 있기 때문이다.  
스프링, 노드, 장고 이런 프레임워크는 적어도 기본적으로 해야한다고 생각한다.  
프레임워크 보다는 서버 아키텍쳐와 성능튜닝등 서버의 전체적인 걸 봤으면 좋겠다.  
이력서를 봤는데 대부분 언어 프레임워크에 종속적이라서 발전 가능성이 안보여 뽑지 않았다.  

핵데이 사전 공부  
* gitflow  
http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html  

* 처음 쓰는 기술은 여기서 주로 공부합니다  
https://www.tutorialspoint.com/  
http://tutorials.jenkov.com/  

* RPC Framework  
https://stackoverflow.com/questions/20653240/what-is-rpc-framework-and-apache-thrift  
GRPC? Thrift?  
RPC 프레임 워크 일반적으로는 동일한 시스템에서 다른 시스템이나 또 다른 과정을 원격 과정에서 코드 조각을 호출 할 프로그래머를 수있는 도구의 집합입니다.  
Apache Thrift 의 특별한 경우 , 효율적이고 OS 플랫폼과 프로그래밍 언어에서 사용할 수 있도록 설계된 프레임 워크에 대해 이야기합니다. 또한 전송 (소켓, 파이프 등) 및 프로토콜 (바이너리, JSON, 심지어 압축)과 SSL 또는 SASL 지원과 같은 몇 가지 옵션에 대한 유연성이 있습니다.  

* Redis vs Memcached  
https://ojava.tistory.com/70  
https://d2.naver.com/helloworld/614607  
Serialize 방식에는 어떤게 있을까? 왜 해야할까?  

* SHARD  
http://tech.kakao.com/2016/07/01/adt-mysql-shard-rebalancing/  

* 여러 IT회사의 기술 블로그들이 있는데요 심심할때 보면 좋습니다.(저도 잘 안봐요..ㅋㅠ)  
http://woowabros.github.io/  
https://meetup.toast.com/  
https://tmondev.blog.me/  

* 조대협님 블로그 - 네이버있다 구글 가신분인데 유용한 글이 많습니다  
http://bcho.tistory.com/948  
http://bcho.tistory.com/1005  

* TCP/UDP
http://www.inven.co.kr/webzine/news/?news=165870   

—————————————————————————————————
MSA 이론  

Msa 구성(동아리)  
https://github.com/Mash-UP-BACKEND-6th/BackendStudy/blob/master/181020.md  

조대협님 대용량 아키텍쳐 설계 패턴  
https://www.slideshare.net/Byungwook/4-61487454  

조대협님 MSA  
http://bcho.tistory.com/948  

MSA 데이터베이스 분리  
https://medium.com/@nathankpeck/microservice-principles-decentralized-data-management-4adaceea173f  

———————————————————————————————————
API GATEWAY  

API-Gateway 배민 spring zuul  
http://woowabros.github.io/r&d/2017/06/13/apigateway.html  

API-Gateway spring zuul  
http://blog.eomdev.com/java/2016/05/30/API-Gateway.html  

———————————————————————————————————

트랜잭션 구현  
https://www.popit. kr/rest-%EA%B8%B0%EB%B0%98%EC%9D%98-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%B6%84%EC%82%B0-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B5%AC%ED%98%84-1%ED%8E%B8/  

Msa 아키텍쳐 구성(메시지 큐/ 트랜잭션)  
https://kihoonkim.github.io/2018/03/25/Microservices%20Architecture/first-msa-retro/  

Event driven Microservice(메세징큐를 이용한 방식)  
https://goodyhlee.wordpress.com/2015/11/29/msa-%EC%97%90%EC%84%9C-%EB%B6%84%EC%82%B0%EB%90%9C-%EC%9B%90%EA%B2%A9-%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B0%84-%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98-%EA%B4%80%EB%A6%AC-%EB%B0%A9%EB%B2%95/  

트랜잭션 처리  
https://brainbackdoor.tistory.com/78  

———————————————————————————————————

캐싱  

스프링 캐시  
https://minwan1.github.io/2018/03/18/2018-03-18-Spring-Cache/  

자바 직렬화  
http://woowabros.github.io/experience/2017/10/17/java-serialize.html  

Spring-redis 사용법(직렬화)  
http://yookeun.github.io/java/2017/05/21/spring-redis/  
http://yakolla.tistory.com/46  

Redis vs memcached  
http://blog.leekyoungil.com/?p=200  

———————————————————————————————————
RPC  
https://www.hardikp.com/2018/07/28/services/  
https://github.com/briandilley/jsonrpc4j/wiki/JSON-RPC-for-Java-Client-&-Spring-Boot-(Server-example)  


GRPC  

맛보기  
https://medium.com/@goinhacker/microservices-with-grpc-d504133d191d   
https://developer.ibm.com/kr/cloud/blockchain/2017/03/26/grpc_overview_01/  

유튜브 - 스프링캠프 2017 gㅏ벼운 RPC, gRPC(빠르고 가벼운 Polyglot. RPC framework)  
https://www.youtube.com/watch?v=sKWy7BJxIas  

GitHub - grpc-spring-boot-starter  
https://github.com/LogNet/grpc-spring-boot-starter  

GiHub - GPRC APIgateway  
https://github.com/grpc-ecosystem/grpc-gateway/blob/master/README.md  

피드시스템(인스타/페북을 생각해보세요)  
피드 구성 전략 2가지를 소개합니다.  
- Inbox  
메시지를 개별 사용자의 전용 메시지함에 전달하는 전략  
메시지를 전달할 때 대상 목록이 필요하다.  
‘이 메시지를 어떤 사용자의 메시지함에 전달해야 하지?’  
메시지를 전달한 후에도 전달 대상에 대한 정보를 저장하지만, 외부에 제공하지 않으며 메시지를 삭제할 때 함께 폐기한다.  
장점  
메시지를 조회할 때 전용 메시지함을 한번만 조회하기 때문에 부담이 적다.  
단점  
메시지를 전달할 때 부하가 크다.  
수신자가 여럿일수록 메시지 전달 횟수도 많아지기 때문이다.  
수신자가 10만명 이상인 메시지를 자주 발송하는 경우 전송시간이 길어지며, 시스템 전체 성능에 영향을 미친다.  
한번 메시지가 전달되면 발송 대상을 변경하기 어렵다.  
저장 공간을 많이 소모한다.  
- Outbox  
메시지를 공용 메시지함에 저장하고, 필요한 경우 조회한다.  
특정 유저가 자신의 메시지를 조회할 때 관계 정보가 필요하다.  
‘이 사용자는 어떤 공용 메시지함을 봐야 하지?’  
장점  
일일히 메시지 전달을 하지 않아 부담이 적다.  
단점  
메시지를 조회할 때마다 대상 사용자의 관계 정보를 확인해야 한다.  
여러 채널과 관계를 맺은 사용자는 각 채널의 공용 메시지함을 한 번씩 조회하여야 한다.  

[면접 대비](https://github.com/WeareSoft/tech-interview)

---
출처 : [MashUp이동준](https://github.com/korea8378)