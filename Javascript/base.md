# Javascript

- 가벼운 인터프리터형 혹은 JIT-컴파일형 프로그래밍 언어
- 일급 함수를 지원
- 주로 웹 페이지를 위한 스크립팅 언어로 알려져 있지만, node.js나 Apache CouchDB처럼 많은 비브라우저 환경에서도 사용
- 프로토 타입 기반의 다중 패러다임 스크립팅 언어로서, 역동적이고, 객체지향형, 멸령형 및 선언형(가령 함수형 프로그래망) 스타일을 지원 합니다.

# 숫자형 문자 값이 숫자로 변경되는 경우

- Number(숫자형 문자)
- +숫자형 문자
- 숫자형 문자 - 0
- 숫자형 문자 \* 1
- 숫자형 문자 / 1

# 문자를 숫자로 바꾸는 경우

- window.paseInt(문자, 10)
- window.paseFloat(문자, 10)

# 불리언 값으로 변경되는 경우

- Boolean(값)
- !!값
- 0, '', undefined, null은 false

# null, undefinde

- 숫자 + null = 숫자
- 숫자 + undefiend = NaN

# 그래서 자바스크립트를 잘알고 있다면 알고 있어야할 간단한 질문들을 몇 개 정리해보았다. 자바스크립트를 잘 알고 있다면 너무너무나 쉬운 질문들일 것이다.

- 자바스크립트의 scope는?
- (function() { /_ 어쩌고 _/}()); 의 의미는?
- window와 글로벌의 상관관계는?
- prototype은?
- 상속을 구현하는 방법은?
- 변수 선언에 var를 안써줘도 동작 하지만 써줘야하는 이유는?
- arguments instanceof Array === false?
- private 함수와 private 변수 만드는 방법은?
- call 함수와 apply 함수의 다른 사용처는?

출처: https://unikys.tistory.com/291 [All-round programmer]

# 조금더 고급 질문을 한다면,

- \<script> 의 적당한 위치는?
  - 일반적으로 \<script> 태그는 \<head>안에다 많이 두지만, UX를 향상시키기 위해서는 \<body>의 가장 아래부분에 놔두는 것이 맞다. 이는 \<head> 안에다가 두면 먼저 \<script>의 http request(GET)을 먼저 다 끝내고 스크립트의 실행을 다 끝내고난 다음에 HTML을 로드하기 때문에 사용자의 입장에서 페이지가 로드되는 체감이 자바스크립트의 규모나 네트워크상태에 따라서 달라질 수 있기 때문이다. 물론 \<script>의 종류에 따라서 \<head>에 두는 것이 좋기도 하지만 현재 90%이상의 웹 사이트에서 사용되는 자바스크립트라면 <body> 뒷부분에 둬도 상관없고, 0.2초라도 페이지가 빨리 뜨는 것은 사용자를 묶어두거나 재방문을 유도할 수 있는 아주 사소한 개선점이다.
  - 반면 CSS를 부르는 \<link>는 \<head> 안에 두는 것이 유리하다. 왜일까 생각해보면 답은 쉽다. 먼저 스타일이 설정된 상태에서 HTML을 로드하는 거랑 HTML을 일단 로드하고 스타일을 적용하는 것이랑 사용자의 입장에서 후자는 전체적인 UI에 한번의 변화가 있기 때문에 UX상 안 좋기 때문이다.

출처: https://unikys.tistory.com/291 [All-round programmer]

- minification과 gzip?
- this가 결정되는 방법은?
- DOM reflow가 발생될 때는?
- 이벤트 bubble과 capture의 활용 방안은?
- setTimeout(function(){alert("time up!"), 1000); 가 호출되는 시간은?
- Lazy load를 왜 하는 이유는?

출처: https://unikys.tistory.com/291 [All-round programmer]
