
# REST API

#### 기본 설명
> URI는 정보의 자원을 표현해야 합니다.
> 자원의 행위는 HTTP Method로 표현해야 합니다.

|메소드|의미|Idempotent|
|----|---|-----------|
|POST|Create|No|
|GET|Select|Yes|
|PUT|Update|Yes|
|DELETE|Delete|Yes|

#### 특성
유니폼 인터페이스(Uniform Interface)
> HTTP 표준에만 따른 다면, 어떠한 기술이라던지 사용이 가능한 인터페이스 스타일 입니다. 

무상태성/스테이트리스(Stateless)
> 상태가 있다 없다는 의미는 사용자나 클라이언트의 컨택스트를 서버쪽에 유지 하지 않는다는 의미로,쉽게 표현하면 HTTP Session과 같은 컨텍스트 저장소에 상태 정보를 저장하지 않는 형태를 의미 합니다.<br> 
> 상태 정보를 저장하지 않으면 각 API 서버는 들어오는 요청만을 들어오는 메시지로만 처리하면 되며, 세션과 같은 컨텍스트 정보를 신경쓸 필요가 없기 때문에 구현이 단순해 집니다.

캐슁 가능(Cacheable)
> REST의 큰 특징 중의 하나는 HTTP라는 기존의 웹 표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존의 인프라를 그대로 활용이 가능 합니다. 

자체 표현 구조(Self-descriptiveness)
> 리소스와 메서드를 이용해서 어떤 메서드에 무슨 행위를 하는지를 알 수 있으며, 또한 메시지 포맷 역시 JSON을 이용해서 직관적으로 이해가 가능한 구조 입니다. 

클라이언트 서버 구조 (Client-Server 구조)
> REST 서버는 API를 제공하고, 제공된 API를 이용해서 비즈니스 로직 처리 및 저장을 책임 집니다.

##### REST 안티 패턴
> GET/POST를 이용한 터널링<br>
> Self-descriptiveness 속성을 사용하지 않음<br>
> HTTP Response code를 사용하지 않음<br>

#### 설계 가이드
REST URI는 심플하고 직관적으로 만들자
> URI에 리소스명은 동사보다는 명사를 사용 합니다.( 단수형 명사 보다는 복수형 명사 사용 )<br>
리소스간의 관계를 표현하는 방법
> Option 1. 서브 리소스로 표현하는 방법<br>
> Option 2. 서브 리소스에 관계를 명시 하는 방법<br>
에러처리
> 에러처리의 기본은 HTTP Response Code를 사용한 후, Response body에 error detail을 서술하는 것이 좋습니다.<br>
API 버전 관리
> API 정의에서 중요한 것중의 하나는 버전 관리입니다.<br>
페이징
> 큰 사이즈의 리스트 형태의 응답을 처리하기 위해서는 페이징 처리와 partial response 처리가 필요합니다.<br>
Partial Response 처리
> 리소스에 대한 응답 메세지에 대해서 굳이 모든 필드를 포함할 필요가 없는 케이스가 있습니다.<br>
검색 (전역검색과 지역검색)
> 검색은 일반적으로 HTTP GET에서 Query String에 검색 조건을 정의하는 경우가 일반적인데, 이 경우 검색조건이 다른 Query String과 섞여 버릴 수 있습니다.<br>
HATEOS를 이용한 링크 처리
> HATEOS는 Hypermedia as the engine of application state의 약어로, 하이퍼미디어의 특징을 이용하여 HTTP Response에 다음 Action이나 관계되는 리소스에 대한 HTTP Link를 함께 리턴하는 것입니다.<br>
단일 API 엔드포인트 활용

#### 문제점
1. JSON+HTTP 를 쓰면 REST인가?
1. 표준 규약이 없다
1. 기존의 전통적인 RDBMS에 적용 시키기에 쉽지 않다.

#### 보안
[추후 정리가 필요](http://bcho.tistory.com/955)


참고 : [조대협의 블로그](http://bcho.tistory.com/955?category=252770)