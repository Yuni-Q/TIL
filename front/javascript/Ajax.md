
# 비동기식 처리 모델과 Ajax

## 1. Ajax (Asynchronous JavaScript and XML)
Ajax(Asynchronous JavaScript and XML)는 자바스크립트를 이용해서 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미합니다.  

서버로부터 웹페이지가 반환되면 화면 전체를 갱신해야 하는데 페이지 일부만을 갱신하고도 동일한 효과를 볼 수 있도록 하는 것이 Ajax입니다.  
페이지 전체를 로드하여 렌더링할 필요가 없고 갱신이 필요한 일부만 로드하여 갱신하면 되므로 빠른 퍼포먼스와 부드러운 화면 표시 효과를 기대할 수 있습니다.  

## 2. JSON (JavaScript Object Notation)
JSON(JavaScript Object Notation)은 클라이언트와 서버 간 데이터 교환을 위한 규칙 즉 데이터 포맷을 말합니다.  
JSON은 일반 텍스트 포맷보다 효과적인 데이터 구조화가 가능하며 XML 포맷보다 가볍고 사용하기 간편하며 가독성도 좋습니다.  
자바스크립트의 객체 리터럴과 매우 흡사하다. 하지만 JSON은 순수한 텍스트로 구성된 규칙이 있는 데이터 구조입니다.  
> 키는 반드시 큰따옴표(작은따옴표 사용불가)로 둘러싸야 합니다.  

### 2.1 JSON.stringify
JSON.stringify 메소드는 객체를 JSON 형식의 문자열로 변환합니다.  

### 2.2 JSON.parse
JSON.parse 메소드는 JSON 데이터를 가진 문자열을 객체로 변환합니다.  
> 서버로부터 브라우저로 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체로서 사용하려면 객체화하여야 하는데 이를 역직렬화(Deserializing)이라 합니다.  
> 역직렬화를 위해서 내장 객체 JSON의 static 메소드인 JSON.parse를 사용합니다.  

## 3. XMLHttpRequest
브라우저는 XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성하고 전송합니다.  
서버가 브라우저의 요청에 대해 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리합니다.  

### 3.1 Ajax request

```javascript
// XMLHttpRequest 객체의 생성
var xhr = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다
xhr.open('GET', '/users');
// Request를 전송한다
xhr.send();
```

#### 3.1.1 XMLHttpRequest.open
XMLHttpRequest 객체의 인스턴스를 생성하고 XMLHttpRequest.open 메소드를 사용하여 서버로의 요청을 준비합니다.  

```javascript
XMLHttpRequest.open(method, url[, async])
```
> method : HTTP method (“GET”, “POST”, “PUT”, “DELETE” 등)
> url :	요청을 보낼 URL
> async : 비동기 조작 여부. 옵션으로 default는 true이며 비동기 방식으로 동작합니다.  

#### 3.1.2 XMLHttpRequest.send
- GET 메소드의 경우, URL의 일부분인 쿼리문자열(query string)로 데이터를 서버로 전송합니다.  
- POST 메소드의 경우, 데이터(페이로드)를 Request Body에 담아 전송합니다.  
> XMLHttpRequest.send 메소드에는 request body에 담아 전송할 인수를 전달할 수 있습니다.  
> 만약 요청 메소드가 GET인 경우, send 메소드의 인수는 무시되고 request body은 null로 설정 됩니다.  

#### 3.1.3 XMLHttpRequest.setRequestHeader
XMLHttpRequest.setRequestHeader 메소드는 HTTP Request Header의 값을 설정합니다.  
setRequestHeader 메소드는 반드시 XMLHttpRequest.open 메소드 호출 이후에 호출합니다.  

|타입|서브타입|
|---|------|
|text 타입|text/plain, text/html, text/css, text/javascript|
|Application 타입|application/json, application/x-www-form-urlencode|
|File을 업로드하기 위한 타입|multipart/formed-data|

```javascript
// json으로 전송하는 경우
xhr.open('POST', '/users');
// 클라이언트가 서버로 전송할 데이터의 MIME-type 지정: json
xhr.setRequestHeader('Content-type', 'application/json');
var data = { id: 3, title: 'JavaScript', author: 'Park', price: 5000};
xhr.send(JSON.stringify(data));
```

##### Accept
HTTP 클라이언트가 서버에 요청할 때 서버가 센드백할 데이터의 MIME-type을 Accept로 지정할 수 있습니다.  
만약 Accept 헤더를 설정하지 않으면, send 메소드가 호출될 때 Accept 헤더가 */*으로 전송됩니다.  

## 3.2 Ajax response
```javascript
// XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 이벤트 핸들러를 호출한다.
xhr.onreadystatechange = function (e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if(xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log('Error!');
    }
  }
};
```

### readXMLHttpRequest.readyState의 값

|Value|State|Description|
|-----|-----|------------|
|0|UNSENT|XMLHttpRequest.open() 메소드 호출 이전|
|1|OPENED|XMLHttpRequest.open() 메소드 호출 완료|
|2|HEADERS_RECEIVED|XMLHttpRequest.send() 메소드 호출 완료|
|3|LOADING|서버 응답 중(XMLHttpRequest.responseText 미완성 상태)|
|4|DONE|서버 응답 완료|

## CORS 
요청에 의해 웹페이지가 전달된 서버와 동일한 도메인의 서버로 부터 전달된 데이터는 문제없이 처리할 수 있습니다.  
하지만 보안상의 이유로 다른 도메인(http와 https, 포트가 다르면 다른 도메인으로 간주한다)으로의 요청(크로스 도메인 요청)은 제한됩니다.  
이것을 동일출처원칙(Same-origin policy)이라고 합니다.  

### 우회방법

1. 웹서버의 프록시 파일
서버에 원격 서버로부터 데이터를 수집하는 별도의 기능을 추가하는 것입니다. 이를 프록시(Proxy)라 합니다.  

2. JSONP
script 태그의 원본 주소에 대한 제약은 존재하지 않는데 이것을 이용하여 다른 도메인의 서버에서 데이터를 수집하는 방법입니다.  
자신의 서버에 함수를 정의하고 다른 도메인의 서버에 얻고자 하는 데이터를 인수로 하는 함수 호출문을 로드하는 것입니다.  

3. Cross-Origin Resource Sharing
HTTP 헤더에 추가적으로 정보를 추가하여 브라우저와 서버가 서로 통신해야 한다는 사실을 알게하는 방법입니다.  
W3C 명세에 포함되어 있지만 최신 브라우저에서만 동작하며 서버에 HTTP 헤더를 설정해 주어야 합니다.  

























---
참조 : [비동기식 처리 모델과 Ajax](https://poiemaweb.com/js-ajax)
