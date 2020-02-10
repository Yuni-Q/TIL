# REST API

#### 기본 설명

> REST는 Representational State Transfer라는 용어의 약자 입니다.
> URI는 정보의 자원을 표현해야 합니다.
> 자원의 행위는 HTTP Method로 표현해야 합니다.

| 메소드 | 의미   | Idempotent |
| ------ | ------ | ---------- |
| POST   | Create | No         |
| GET    | Select | Yes        |
| PUT    | Update | Yes        |
| DELETE | Delete | Yes        |

#### 구성

자원(RESOURCE) - URI<br>
행위(Verb) - HTTP METHOD<br>
표현(Representations)<br>

#### 특성

##### 유니폼 인터페이스(Uniform Interface)

Uniform Interface는 URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍처 스타일 입니다.<br>

> HTTP 표준에만 따른 다면, 어떠한 기술이라던지 사용이 가능한 인터페이스 스타일 입니다.<br>

##### 무상태성/스테이트리스(Stateless)

작업을 위한 상태정보를 따로 저장하고 관리되지 않습니다.<br>

> 상태가 있다 없다는 의미는 사용자나 클라이언트의 컨택스트를 서버쪽에 유지 하지 않는다는 의미로,쉽게 표현하면 HTTP Session과 같은 컨텍스트 저장소에 상태 정보를 저장하지 않는 형태를 의미 합니다.<br>
> 상태 정보를 저장하지 않으면 각 API 서버는 들어오는 요청만을 들어오는 메시지로만 처리하면 되며, 세션과 같은 컨텍스트 정보를 신경쓸 필요가 없기 때문에 구현이 단순해 집니다.<br>

##### 캐시 가능(Cacheable)

HTTP 프로토콜 표준에서 사용하는 Last-Modified태그나 E-Tag를 이용하여 필요시 처리하면 됩니다.<br>

> REST의 큰 특징 중의 하나는 HTTP라는 기존의 웹 표준을 그대로 사용하기 때문에, 웹에서 사용하는 기존의 인프라를 그대로 활용이 가능 합니다.<br>

##### 자체 표현 구조(Self-descriptiveness)

REST의 또 다른 큰 특징 중 하나는 REST API 메시지만 보고도 이를 쉽게 이해 할 수 있는 자체 표현 구조로 이루어 집니다.<br>

> 리소스와 메서드를 이용해서 어떤 메서드에 무슨 행위를 하는지를 알 수 있으며, 또한 메시지 포맷 역시 JSON을 이용해서 직관적으로 이해가 가능한 구조 입니다.<br>

##### 클라이언트 서버 구조 (Client-Server 구조)

REST 서버는 API 제공, 클라이언트는 사용자 인증이나 컨텍스트(세션, 로그인 정보)등을 직접 관리하는 구조로 각각의 역할이 확실히 구분되기 때문에 클라이언트와 서버에서 개발해야 할 내용이 명확해지고 서로간 의존성이 줄어듭니다.<br>

> REST 서버는 API를 제공하고, 제공된 API를 이용해서 비즈니스 로직 처리 및 저장을 책임 집니다.<br>

##### 계층형 구조

REST 서버는 다중 계층으로 구성될 수 있으며 보안, 로드 밸런싱, 암호화 계층을 추가해 구조상의 유연성을 둘 수 있고 PROXY, 게이트웨이 같은 네트워크 기반의 중간매체를 사용할 수 있게 합니다.<br>

##### REST 안티 패턴

> GET/POST를 이용한 터널링<br>
> Self-descriptiveness 속성을 사용하지 않음<br>
> HTTP Response code를 사용하지 않음<br>

#### 설계 가이드

REST URI는 심플하고 직관적으로 만들자

> URI에 리소스명은 동사보다는 명사를 사용 합니다.( 단수형 명사 보다는 복수형 명사 사용 )<br>
> 리소스간의 관계를 표현하는 방법
> Option 1. 서브 리소스로 표현하는 방법<br>
> Option 2. 서브 리소스에 관계를 명시 하는 방법<br>
> 에러처리
> 에러처리의 기본은 HTTP Response Code를 사용한 후, Response body에 error detail을 서술하는 것이 좋습니다.<br>
> API 버전 관리
> API 정의에서 중요한 것중의 하나는 버전 관리입니다.<br>
> 페이징
> 큰 사이즈의 리스트 형태의 응답을 처리하기 위해서는 페이징 처리와 partial response 처리가 필요합니다.<br>
> Partial Response 처리
> 리소스에 대한 응답 메세지에 대해서 굳이 모든 필드를 포함할 필요가 없는 케이스가 있습니다.<br>
> 검색 (전역검색과 지역검색)
> 검색은 일반적으로 HTTP GET에서 Query String에 검색 조건을 정의하는 경우가 일반적인데, 이 경우 검색조건이 다른 Query String과 섞여 버릴 수 있습니다.<br>
> HATEOS를 이용한 링크 처리
> HATEOS는 Hypermedia as the engine of application state의 약어로, 하이퍼미디어의 특징을 이용하여 HTTP Response에 다음 Action이나 관계되는 리소스에 대한 HTTP Link를 함께 리턴하는 것입니다.<br>
> 단일 API 엔드포인트 활용

#### 리소스 간의 관계를 표현하는 방법

REST 리소스 간에는 연관 관계가 있을 수 있고, 이런 경우 다음과 같은 표현방법으로 사용한다.<br>

> /리소스명/리소스 ID/관계가 있는 다른 리소스명<br>
> GET : /users/{userid}/devices (일반적으로 소유 ‘has’의 관계를 표현할 때)<br>

만약에 관계명이 복잡하다면 이를 서브 리소스에 명시적으로 표현하는 방법이 있습니다.<br>

> 예를 들어 사용자가 ‘좋아하는’ 디바이스 목록을 표현해야 할 경우 다음과 같은 형태로 사용될 수 있습니다.<br>
> GET : /users/{userid}/likes/devices (관계명이 애매하거나 구체적 표현이 필요할 때)<br>

#### 응답 상태 코드

REST 요청의 결과를 상태코드로도 같이 표현을 한다

- 200 클라이언트의 요청을 정상적으로 수행함
- 201 클라이언트가 어떠한 리소스 생성을 요청, 해당 리소스가 성공적으로 생성됨(POST를 통한 리소스 생성 작업 시)

- 301 클라이언트가 요청한 리소스에 대한 URI가 변경 되었을 때 사용하는 응답 코드/Redirect 처리
  (응답 시 Location header에 변경된 URI를 적어 줘야 한다)
- 304 캐쉬 처리시 사용된다

- 400 클라이언트의 요청이 부적절 할 경우 사용하는 응답 코드
- 401 클라이언트가 인증되지 않은 상태에서 보호된 리소스를 요청했을 때 사용하는 응답 코드
  (로그인 하지 않은 유저가 로그인 했을 때, 요청 가능한 리소스를 요청했을 때)
- 402 요금 처리에 대한 오류
- 403 유저 인증상태와 리소스에 대한 액세스 권한이 없을때 처리
- 404 해당 리소스가 존재하지 않을 때
- 409 리소스 상태에 위반되는 행위를 요청 했을때
  (예를 들어 삭제할 수 없는 리소스를 삭제할때)
- 410 존재하지 않는 리소스에 대해 삭제 요청시

- 500 서버에 문제가 있을 경우 사용하는 응답 코드

#### Error Response

클라이언트 성공시는 해당 처리 결과를 보여주고 Status 상태는 내려주지 않습니다.<br>
실패등 에러가 났을때 HTTP Status 코드와 Body에 Error Status 정보를 내려준다.<br>

#### 주의할 점

1. 슬래시 구분자(/)는 계층 관계를 나타내는 데 사용
1. URI 마지막 문자로 슬래시(/)를 포함하지 않는다
1. 하이픈(-)은 URI 가독성을 높이는데 사용
1. 밑줄(\_)은 URI에 사용하지 않는다
1. URI 경로에는 소문자를 사용한다
1. 파일 확장자는 URI에 포함시키지 않는다. (필요하면 Accept header를 사용하도록 합니다.)

#### 문제점

1. JSON+HTTP 를 쓰면 REST인가?
1. 표준 규약이 없다
1. 기존의 전통적인 RDBMS에 적용 시키기에 쉽지 않다.

#### 보안

[추후 정리가 필요](http://bcho.tistory.com/955)

## URL Rules

- 마지막에 / 포함하지 않는다.
- \_(underbar) 대신 -(dash)를 사용한다.
- 소문자를 사용한다.
- 행위(method)는 URL에 포함하지 않는다.
- 컨트롤 자원을 의미하는 URL 예외적으로 동사를 허용한다.

## Set HTTP Headers

### Content-Location

- POST 요청은 대부분 idempotent(멱등, f(f(x))=f(x)) 하지 않다. (멱등, 반환되는 응답 리소스의 결과가 항상 동일하다)
- 요청의 응답 헤더에 새로 생성된 리소스를 식별할 수 있는 Content-Location 속성을 이용한다.

```
HTTP/1.1 200 OK
Content-Location: /users/1
```

- GET, PUT 등의 요청은 idempotent 하다. GET /users/1의 경우 언제나 같은 결과로 응답한다. PUT을 POST처럼 쓰는 경우엔 idempotent하지 않을 수 있다.
- HATEOAS로 Content-Location를 대체할 수 있다.

### Content-Type

- application/json을 우선(될 수 있다면 이것만!)으로 제공한다.
- application/xml 등을 제공해서 응답 포맷을 이원화하지 말자! 응답 포맷을 여러 개로 나누면 요청 포맷도 나눠야 한다.

### Retry-After

- 비정상적인 방법(DoS, Brute-force attack)으로 API 서버를 이용하려는 경우 429 Too Many Requests 오류 응답과 함께 일정 시간 뒤 요청할 것을 나타낸다.

```
HTTP/1.1 429 Too Many Requests
Retry-After: 3600
```

#### Case 1. 인증

- /auth OAuth, JWT 같은 인증 관련 리소스를 요청하는 작업
- /login Id, Password를 이용한 로그인 작업
- 비정상적인 요청(401) 일 때 두 가지 응답 방안
  - n 시간 동안 n 회만 요청 가능
    - 429 응답과 함께 Retry-After: n
  - n 회만 요청 가능
    - 401 응답과 함께 해당 사용자(IP)는 더 이상 인증 관련 API를 사용할 수 없고 다시 요청하려면 특수한 절차가 필요하다는 메세지 응답
      - Retry-After와 관계없음

#### Case 2. 자원 요청

- /posts 특정 사용자가 의도적으로 서버 과부화를 목적으로 반복 요청하는 경우
- n 시간 동안 n 회 이상 요청한 경우 429

### Link

- 페이징 처리를 위해 사용한다.
- github 방법을 따른다. https://developer.github.com/v3/#pagination

```
HTTP/1.1 200 OK
Link: <https://api.test.com/users?page=3&per_page=100>; rel="next",
  <https://api.test.com/users?page=50&per_page=100>; rel="last"
```

- rel
- query parameter의 page, per_page 이름은 알맞게 변경한다.
  - next: The link relation for the immediate next page of results.
  - last: The link relation for the last page of results.
  - first: The link relation for the first page of results.
  - prev: The link relation for the immediate previous page of results.

## Use HTTP methods

### POST, GET, PUT, DELETE 4가지 methods는 반드시 제공한다.

| methods    | POST        | GET               | PUT                        | DELETE            |
| ---------- | ----------- | ----------------- | -------------------------- | ----------------- |
| /users     | 사용자 추가 | 사용자 전체 조회  | 사용자 추가 or 사용자 수정 | 사용자 전체 삭제  |
| /users/hak | 405 ERROR   | 사용자 ‘hak’ 조회 | 사용자 ‘hak’ 수정          | 사용자 ‘hak’ 삭제 |

- PUT /users 경우 표에선 사용자 추가 or 사용자 수정으로 했지만, 보통 Colllection에 PUT 요청은 지원하지 않으므로 405 ERROR 응답하기도 한다.
  - Colllection: /users/hak 에서 users, 집합
  - Document: /users/hak 에서 hak, 집합에 속한 자원

### OPTIONS, HEAD, PATCH를 사용하여 완성도 높은 API를 만든다.

#### OPTIONS

- 현재 End-point가 제공 가능한 API method를 응답한다.

#### HEAD

- 요청에 대한 Header 정보만 응답한다. body가 없다.

#### PATCH

- PUT 대신 PATCH method를 사용한다.
- 자원의 일부를 수정할 때는 PATCH가 목적에 맞는 method다.
- PUT 요청 시 요청을 일부분만 보낸 경우 나머지는 default 값으로 수정되는 게 원칙이다. 그러나, 대부분 PUT 요청에서 이와 같이 개발하진 않는다.
- PUT은 바뀌지 않는 속성도 보내야 한다.
- PATCH를 이용하여 원래의 목적대로 변경하는 파라미터만 요청을 보낸다.

## Use HTTP status

### 의미에 맞는 HTTP status를 리턴한다

## 참고

- [조대협의 블로그](http://bcho.tistory.com/955?category=252770)
- [RESTful API 설계 가이드](https://sanghaklee.tistory.com/m/57)
