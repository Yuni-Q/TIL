
# 전체 모임

회고?  

매 전체모임 때 프로젝트별 활동 사항 브리핑   

2019년 1월 12일 중간 발표  

2019년 2월 23일 최종 발표 및 시연  

## 협업에 도움이 되는 유용한 프로그램들

### Zeplin  

디자이너와 개발자가 소통하기 위한 프로그램  
커맨드(컨트롤) 클릭하면 소통 할 수 있다.  
Assets 배수에 맞게 전체를 받을 수 있다.  
스타일가이드(서체나 색상이 정리 되어 있다.) - 개발자들이 복사해서 사용 할 수 있다.  
- component -> 아이콘이 어디에 쓰였는지 or 다운로드 받을 수 있다.  
extension - 개발자들의 확장 프로그램을 지원  
제플린은 프로젝트 하나만 무료로 사용 할 수 있다.  
결제를 하면 여러개 만들 수 있을 뿐 아니라 (12만원 정도) 컴포넌트가 10개 밖에 안 되는데 무제한으로 넣을 수 있다.  
또한 여러명이 올릴 수 있다.(미결제시 한명만 올릴 수 있다.)  
근데 너무 비쌈...  
17 or 26은 별로...  
디자이너들이 정리를 잘해 줄 필요가 있다.  

### Trello

이슈트래커  
세상을 다 믿어도 내 기억력은 의심해야 한다.  
써본 것 : 엑셀 / 트렐로 / YT  
쓰고 있는 것 : 구글 스프레드 씨트 / 지라 / PivotalTracker  
트렐로가 한달에 한번씩 죽는 문제가 있어서 다른 것을 쓰고 있다.   

#### 지라
업무의 표준 프로세스 : 이슈의 등록 -> 조정 -> 실행 -> 완료 -> 확인  
이슈 검색 필터 마음데로 커스텀 할 수 있다.  
대시보드에 게시판 처럼 붙여 놓을 수 있다.  
지라 / 컴플런스 연동이 아주 좋아 하나의 서비스로 볼 수도 있다(?)  
테스크 간의 종속 관계를 중요 시 여긴다.  
연결 관계를 중요시 여긴다.  

#### PivotalTracker
개발자들이 주로 사용  
지라에 비해 심플  
이슈 보는 것이 훨씬 단순 하다.  
스토리 포인트를 보기 쉽게 해 두었다.  
이슈의 크기를 관리  
지라에 비해 연결성 위주의 관리   
서브 테스크는 제목 말고는 아무 것도 안 들어감.  
블록킹 기능이 있다.(1번이 끝나지 않으면 2번을 할 수 없다)  

##### 단점
1. 툴을 사용하는 것이 중점이 되서 이쁘게 되기 전에 작업을 하지 않는다.  
- 제목에이나 글자에 매몰 되는 사람이 있다.  
- 이슈 트래커 사용에 멘붕이 와서 일이 이상한 방향으로 갈 수 있다.  
- 가이드를 잘 해주어야 하는데 신경 써주기에 바쁜 경우가 많다.  

2. 러닝 커브 !!  
- 관심이 없을수록 크다

##### 장점
업무 프로세스가 표준화가 된다.  
비슷한 일이 반복이 된다.  
형식지 / 암묵지  
문서화 시키기 좋은것 / 힘든 것  
가려져 잇는 일을 표면으로 끌어 올릴 수 있다.  
내가 할 일을 작게 쪼개서 명확하게 관리가 가능하다.  
---
[발표 자료](https://docs.google.com/presentation/d/1oQNsbXdf24Gmw4nvkTdq5uQPSKOopfgIE0Ufqk8ilCM/edit#slide=id.p)

### Github
버전 컨트롤 시스템(CVS or SVN이 존재 했다)
repository의 사진을 계속 찍는다고 생각하면 된다.  
기존과 다른것은 중앙이 아닌 로컬에서 작업 된다.  

#### 메커니즘
repositories(git init)  
working Directory  
Change set  
staging area  
HEAD, FETCH_HEAD  
branch  
commits
push

#### comend
status  
add  
commit  
diff  
branch / checkout  
log  

#### Merging
병합의 3가지 시나리오  
Fast Forward Merge(분기해 뒀으나 수정하지 않음)  
No-COnflict Merge(각각 다른 파일이 수정되서 충돌 없이 merge)  
Rebasing(충돌남 !!)  

#### commit messaging
72자 80자 이상 작업하지 않음  
타이틀에 동사원형으로 시작  
최하단부에는 이슈 url 반드시 첨부 / ref도 작성  
Semantic Tagging  

#### Collaboration Strategies
upstream(master만 존재)  
downstream  
Local  
pull request  

#### tags(releasing)
커밋에 인간이 해독할 수 있는 태그를 달아 둔다.  
태깅을 잘하면 버전관리를 더욱 잘 할수 있다.  

## Slack
메신저 !!  
where work happens  
프로젝트를 시작할때  
예상 계획을 잡을 때  
계약을 잡을 때  
코드를 배포 할 때  
A / B test  
직원이 새로 왔을 때  

### 강점
채널  
검색  
보안  
통합  

투표  
제비뽑기  
롤 전적 검색도 추가 가능  

영상통화 / 화면 공유  
파일전송  
메신저  

# mash-up-kr로 들어가면 됩니당 
