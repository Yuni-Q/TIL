# TECH CONCERT: FRONT END 2019 - 빠르게 훑어보는 웹 개발 트렌드

## 웹 개발에도 트렌드가 있었다.

1. 서버 중심으로 개발
2. 클라이언트 중심으로 개발
3. 고도화

## 서버 중심으로 개발

- 미리 만들어 두거나 서버에서 만든 웹페이지를 제공
- 서버와 클라이언트가 통신하면서 하는 것은 없었다.
- 사용자가 요청한 화면을 서버에서 페이지 단위로 생성해서 제공
- JS 평가가 좋지 않았던 때
- Javascript 코드가 클라이언트에 오픈 되니까 공들여서 짜고 싶지 않다는 뉘양스도 있었다.

- 1969년 10월 말 10시 30분 Internet
- 1978년 TCP/IP
- 1989년 WWW
- 1990년 HTTP, HTML, URI
- 1993년 CGI
- 1994년 cookie
- 1995년 Java Applet, Microsoft Internet Explores, php
- 1996년 JS, activex, flash, ASP
- 1997년 CSS, JavaServlet, DHTML

## 클라이언트 중심으로 개발

- 페이지를 부분적을 갱신, 서버는 API 역할에 집중
- 일단 클라이언트를 준비하고 추가로 필요한 데이터를 클라이언트가 주도적으로 요청해서 이미 화면에 떠있는 페이지 부분에 추가, DOM에 적극적으로 개입

- 1999년 AJAX
  - 페이지를 띄어놓고 AJAX를 무언가를 해보자.
- 2000년 XHTML
- 2003년 spring
- 2004년 파이어폭스, BABEL
  - 이 당시 BABEL도 좋은 평을 받진 못했다.
- 2006년 JQuery, yul
  - JQuery가 게임 체인저가 되었다. JQuery는 훌륭한 아이였다.
- 2007년 Silverlight, Sencha Ext JS, 스마트폰
- 2008년, dojo toolkit, github, adroid
  - mobile first가 시작 됨

## 고도화

- 프론트엔드 로직이 복잡해지면서 라이브러리 적극 활용
- 자바스크립트로 할 수 있는게 생각보다 많다. 하지만 다 만들 순 없으니 라이브러리를 가져다가 사용하자!(모먼트, 로대쉬)
- 통합 된 걸 쓰고 싶다.
- npm이 패키지들을 관리하기 시작
- 도조 - 백본가 나옴
- CSS 그냥 쓰긴 귀찮아서 less, 스타일러스, sass, 부트스트랩까지 나옴
- 백본, 엠버도 모자라서 앵귤러가 나옴. 이어서 리액트, 뷰가 나오면서 바벨을 많이 쓰게 된다.
- js를 빌드하기 시작한다.
- ES6를 통해 클래서와 상속을 랭기지 차원에서 지원함으로서 빌드를 하기 시작. 빌드를 할 것이기 때문에 다른 less 같은 것을 쓰는데도 부담이 적어짐
- node.js가 js 페러다임을 바꿈. 서버 코드로 js로 작성 가능. 커맨드라인 인터페에스에서 쉘에서 실행 가능하게 된다.
- 걸프, 그런트 등이 나오면서 테스트 코드를 작성할 수 있게 된다.
- 점점 더 복잡해 진다.
- 바벨로는 부족해서 타입스크립트도 나왔다.
- 복잡해지는 프론트엔드 로직을 체계저긍로 관리하기 위해 프레임워크, 라이브러리를 적극적으로 사용
- cdn에서 라이브러리를 가져와서 느렸지만 요즘은 빌드해서 떨어뜨려서 조금 나아진거 같다.
- 웹 기술로 네이티브 앱을 만들어 보자.
  - PhoneGap(Cordova), NativeScript, React Native
- 오프라인일 때도 실행되게 하자.
  - PWA
- 웹 앱을 데스크탑에 설치해보자.
  - Node-webkit(nw.js)
  - Electron
  - PWA

- 여긴 너무 많아서 정리가 불가능...

## 프레임워크, 라이브러리 적극 활용
- 앵귤러, 리액트, 뷰 중 하나를 선택
  - 마음에 드는 거 선택
  - 성능 비교보단 팀원이 가장 잘 쓸 수 있는 것을 고르는게 가장 좋다.
- 디자인은 스타일 라이브러리를 사용하는 것도 한 방법. 하지만 각 철학이 있어서 쓸려면 처음부터 쓰는 것이 좋다.
- Component(.jsx, .tsx, .vue) 기반
  1. 1단계
  - 템플릿 : HTML
  - 스타일 : CSS(.css, scss, styl)
  - 로직 : JavaScript / TypeScript(.js, .ts)

  2. 2단계
  - 빌드(babel, webpack, tsc, parcel)

  3. 3단계
  - JavaScript(.js)
  - CSS(.css)

  4. 4단계
  - 웹 브라우저에서 실행

## Task Runner / CLI 사용
-  Bolerplate
  - npm
  - Yeoman
  - Mean.js
- Making Components
  - IDE
- Build
  - gulp
  - grunt
  - Webpack
  - tsc
- Unit / End-to-end Test
  - mocha
  - karma
  - protractor
- Running Server
  - node.js
  - lite-server
  - webpack-dev-server
- Deploy
  - git
  - AWS-cli

## 기본 지식
- 레이아웃 구성
  - HTML - HTML5
- 스타일 지정
  - CSS - CSS3 - flex, grid model - 스타일 라이브러리, 전처리기
- 사용자 동작에 반응, 로직 처리
  - JavaScript - ES6 - TypeScript - 프레임워크
- 완벽가이드 책 추천
- 개발 툴
  - SVN -> git으로 넘어간다.
  - github 사용해 볼 것!(gitLab도 있으나 비슷)
  - 깃헙을 하는 것도 좋고 1일 커밋도 좋다.
- UI, UX
- 디자인 시스템
  
## 데이터 시각화

## 정리
- 프론트엔드 개발 트렌드는 빠르게 변합니다. 계속 찾아보고 공부해야 합니다...
- 보어와 팬텀도 금방 사라져 버렸다.
- Full-stack에는 물리적인 한계가 존재합니다.
- 전문분야를 선택하는 것이 효율적일 수 있습니다.

---

출처 : [TECH CONCERT: FRONT END 2019 - 빠르게 훑어보는 웹 개발 트렌드
](https://www.youtube.com/watch?v=BXOH9b177ho&fbclid=IwAR3sL-YX5dUwp-jow-A7cazO5r7R9QJjJeyJmKGfg5o1bTY-0TGvw0Rj7-U)