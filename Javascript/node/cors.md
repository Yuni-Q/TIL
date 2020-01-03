## CORS 란?

CORS란 Cross Origin Resource Sharing의 약자로, 현재 도메인과 다른 도메인으로 리소스가 요청될 경우를 말합니다.

## Express에서 CORS 허용하기 1

```javascript
app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
```

## Express에서 CORS 허용하기 2

```javascript
var express = require("express");
var cors = require("cors");
var app = express();

// CORS 설정
app.use(cors());

app.get("/products/:id", function(req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});
```

## 로컬에서 CORS policy 관련 에러가 발생하는 이유

- \<script type=module> 은 로컬에서 실행시 자바스크립트 모듈 보안 요구로 인해 CORS 에러가 발생한다
- 로컬시스템에서 로컬 파일 리소스를 요청할 때는 origin(출처)이 null로 넘어가기 때문에 CORS에러가 발생한다.
