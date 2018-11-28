0. 활용 기술 
Node.js / Ruby on Rails / redis / mysql / git / aws EC2
1. 공공데이터 API를 통해 원하는 정류장에 버스 도착 시간을 XML 데이터를 활용하여 표현
2. KT 기프티쇼 API를 활용하여 아이템 및 쿠폰 관리
2.1. 매일 아이템 목록을 새로 가져와서 XML을 JSON으로 변경 후 String으로 redis에 저장
2.2. 기존 아이템 목록에 공개 여부 칼럼을 추가해서 redis에 저장
2.3. 어드민 페이지에서 아이템 공개 여부 설정 하는 기능 추가
2.4. 매일 새로 받은 아이템 목록과 공개여부가 추가 된 redis 자료를 비교해서 새로운 아이템은 공개 여부를 비공개로 해서 추가, 없어진 아이템 삭제 후 로그 기록
2.5. 매일 발행 상태인 쿠폰을 KT API에 확인 후 상태와 변경 날자를 DB에 업데이트 및 로그 기록
2.6. Hash로 하드 코딩 되어 있던 부분을 redis에 저장하여 어드민 페이지에서 수정 가능하도록 설정 ( 카테고리별 대표 사진, 브랜드 추가 / 삭제, 컬러 변경 가능 )
2.8. 어드민 페이지에서 아이템 6개를 골라서 카테고리 별로 redis 저장
2.9. 9개로 고정 되어 있는 카테고리를 유동적으로 운영하기 위해 redis에서 RDB로 변경 ( 카테고리 이름, 케테고리 및 브랜드 순서, 대표아이템 변경 가능 )
2.10. 가진 캐쉬로 구매 할 수 있는 아이템을 카테고리 별로 순환하면서 최대 20개를 추천 ( 전체 아이템 순위가 높은 것부터 추천 )
3. 어드민 개발
3.1. 데이터 수정을 위한 어드민 웹 개발
3.2. 통계 자료를 위한 어드민 웹 개발
3.3 CRUD에 관한 API를 받아서 어드민 웹 개발 ( 이벤트 추가 및 삭제, 아이템 추가 및 삭제 )

위치 기반 사진 저장 서비스
0. 서비스 설명
Daum 지도 API와 AWS S3를 활용하여 지도에 사진과 정보를 저장하는 서비스 입니다.
1. 기획 의도
페이스북과 같은 SNS에서 장소 추천을 받아 공유 혹은 저장을 통해 기록해 놓지만 막상 그 근처를 방문하게 되었을 때 찾는 것은 쉽지 않습니다.
친구가 맛집을 물어 볼 때 위치, 경로 등 파악해야 할 것도 많고 검색해서 찾아서 링크를 알려주는 경우가 많습니다.
우연히 발견한 맛집을 기록해 두고 근처에서 밥을 먹게 되었을 때 빨리 찾고 싶습니다.
2. Skill set
Web Back-end : Ruby on Rails(scaffold, devise), nginx, Amazon S3, Lightsail
Web Front-end : HTML, CSS, JavaScript (AJAX, JQuery), Bootstrap
3. 역할
구성 : 2명
팀장(프론트엔드,백엔드)
개발을 처음하는 친구와 함께 하면서 큰 부분을 만들어 주고 세부적인 부분을 도움 받으면 진행하였습니다.
https://github.com/Yuni-Q/team_project_saveLoc

멀티캠퍼스 주관 HANAIot반 멋쟁이사자처럼 해커톤 best project상

1. 동아리 활동
1.1. MashUp
- 주제 : 디자이너와 개발자( 안드로이드, 아이오에스, 백엔드)와 함께 프로젝트를 하는 동아리 입니다.
- 기간 : 2018년 04월 ~
- 팀 : iOS팀
- 동아리 내의 소모임
재능 교환 ( 디자이너에게 웹 프론트 개발을 알려주고 포토샵 사용법을 배웠습니다. )
Rx 스터디 ( 안드로이드팀과 Rx 책으로 8주간 학습 )
웹 스터디 ( 디자이너와 함께 웹 프론트를 정석적으로 사용하기 위한 공부 ) - https://github.com/Yuni-Q/web-study-assignment
- 프로젝트 명(앱이름) : Groby
- 프로젝트 주제 : 공동구매를 조금 더 쉽게 진행할 수 있도록 도와주는 앱
- 프로젝트 기간 : 2018년 06월 ~ 
- 활용 기술 : Swift
- 처음 Swift를 배우면서 참여한 프로젝트 입니다. 실력이 부족한만큼 기획에 많이 참여하고 팀원이 내주는 과제를 해결하는 방식으로 참여 하였습니다. ( 스토리보드 사용해보기, 네이게이션 사용, 버튼을 이용한 뷰 변경 )
- https://github.com/Yuni-Q/groby-iOS
- 2018년 09월부터 BackEnd팀으로 변경
1.2. 멋쟁이 사자처럼
- 주제 : 비전공자에게 개발을 알려 주는 동아리 입니다.
- 기술 : Ruby on Rails, AWS S3, Bootstrap
- 기간 : 2016년 4월 ~ 2016년 8월
2. 친구들과 프로젝트 ( 쇼핑몰 만들기 )
2.1. 서비스 설명
기존 쇼핑몰과 같은 기능을 구현하고 기부 기능을 추가하였습니다.
2.2. Skill set
Web Back-end : Ruby on Rails(scaffold, devise), nginx, Amazon S3, Lightsail
Web Front-end : HTML, CSS, JavaScript (AJAX, JQuery), Bootstrap
2.3. 역할
구성 : 3명
역활 : Backend developer
- https://github.com/Yuni-Q/team_project_shoppingMall
3. 국비 지원 교육
- 주제 : HANAflatForm기반 IoT 개발자 양성 과정
- 기술 : JAVA, Spring, ABAP, Ruby on Rails, Python
- https://github.com/Yuni-Q/team_project_saveLoc

## SVm(PUFF)

### Ruby
관리용 내부 Admin 요구 사항 해결  
각종 통계를 위한 Admin 작업  
KT GiftShow 관련 작업  
Swagger 작업   
Redis 사용  
Node 서버와 Rails Admin 통신을 통한 데이터 CRUD (ajax, controller)  
RDB migration으로 작업  
Staging, Production 배포  
이미지 업로더 생성  
검색 기능 구현  
프론트에 수정한대로 Redis에 저장 후 값 컨트롤  
Redis 자료 RDB로 전환  
카테고리별로 6개의 아이템만 redis에 저장  
GiftShow  MMS 전송에서 DB에 이미지 url 저장 후 관리 가능하게 RDB에 추가  
GiftShow 상태 체크 및 앱 내 공유 기능  
객체 sorted  
Firebase를 통한 공지 작성 (admin에서)  
게임 통계를 위해 redis 자료 RDB로 옮기기 (DB 직접 설계)  
서버 할당 알고리즘 변경  
UTC 시간 차이 문제 해결 (Ruby, Node 각각 시간 표시 방식이 다름)  
하드 코딩 되어 있던 부분 RDB와 Redis로 분배해서 제거
페이징 작업
새로운 API 작성  

### Node
Swagger 작업  
Redis 사용  
Schedule 작업  
Rails 서버 Node로 포팅  
Staging, Production 배포  
Rails로 컨트롤 하는 작업 스케쥴로 컨트롤  
매일 받아오는 자료에 노출 여부를 추가  
전날 자료와 비교 후 변경 사항 적용 but 노출 여부는 이전과 같게 유지 추천 상품 알고리즘 변경  
객체 sorted  
각종 통계를 위한 Admin 작업  
UTC 시간 차이 문제 해결 (Ruby, Node 각각 시간 표시 방식이 다름)  
Job 생성 및 SQS 적용  
새로운 API 작성  
Node 어드민 작업  
이미지 업로더 및 영상 업로더 생성  
Swagger 모듈화 해서 만들기

### ETC
API Gayway 추가  
RDB workbanch로 작업  
EC2 인스턴스 생성  
Redis-commander 원격 redis 접속  
앱에서 클릭으로 동작하는 모든 API 추적  
AutoScaling 생성  
ELB 적용  
Route53 사용  
Swagger(json, yaml) 사용  

