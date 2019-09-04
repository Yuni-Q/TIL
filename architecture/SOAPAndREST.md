# SOAP and REST

## SOAP(Simple Object Access Protocol)

- 일반적으로 널리 알려진 HTTP, HTTPS, SMTP 등을 통해 XML 기반의 메시지를 컴퓨터 네트워크 상에서 교환하는 프로토콜

### 장점

- 기존 원격 기술들에 비해서 프록시와 방화벽에 구애 받지 않고 쉽게 통신 가능하다.
- 플랫폼과 프로그래밍 언어에 독집적이다.
- 웹 서비스를 제공하기 위한 표준(WSDL, UDDI, WS-*)이 잘 정립되어 있다.
- 에러 처리에 대한 내용이 기본으로 내장되어 있다.
- 분산 환경에 적합하다.

### 단점

- 복잡한 구조로 인해 오버헤드가 있으며, 이는 SOAP의 확장을 저해하고 있다.
- REST에 비해서 상대적으로 무겁고 속도도 느리다.
- 개발 난이도가 높아 개발 환경의 지원이 필요하다.

### 아키텍처

- UDDI 레지스트리를 통해 웹서비스는 등록(Publish)하고, 탐색(Find)하고, 바인딩(Bind)하여 사용

### 동작원리

- 서비스 요청자가 SOAP로 인코딩하여 웹 서비스 요청을 서비스 제공자에게 전달
- 서비스 제공자는 이를 디코딩하여 적절한 서비스 로직을 수행시켜서 결과를 얻고, 그 결과를 다시 SOAP로 인코딩하여 반환

## REST(REepresentational State Transfer)

- HTTP를 통해 세션 트랙킹 같은 부가적인 전송 레이어 없이, 전송하기 위한 아주 간단한 인터페이스
- HTTP등의 기본 개념에 충실히 따르는 웹 서비스

### 장점

- 플랫폼과 프로그래밍 언어에 독립적이다(=SOAP)
- SOAP보다 개발하기 단순하므로 학습곡선이 작고 도구가 거의 필요 없다.
- 간결하므로 추가적인 메세징 계층이 없다.

### 단점

- point-to-point 통신 모델을 가정하므로 둘 이상으로 상호작용하는 분산환경에는 유용하지 않다.
- 보안, 정책 등에 대한 표준이 없다.
- HTTP 통신 모델만 지원한다.

### 아키텍처

- 리소스를 등록하고 저장해두는 중간 매체 없이 리소스 제공자가 직접 리소스 요청자에게 제공함

### 프로세스

- 기본 HTTP프로토콜의 메소드 GET/PUT/POST/DELETE를 이용하여 서비스 제공자에게 서비스를 요청

| Method | CRUD | SQL |
|--------|------|-----|
| POST | Create | Insert |
| GET | Read | SELECT |
| PUT | Update | UPDATE |
| DELETE | Delete | DELETE |

- 서비스 제공자는 다양한 형태로 표현된(JSON, XML, RSS 등) 리소스를 반환

### REST API란?
- REST 구조 스타일에 적합한 Web API

---

참조 : [SOAP REST 이해](https://www.slideshare.net/yjaeseok/soap-rest)