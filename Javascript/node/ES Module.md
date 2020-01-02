# ES Module

- Node.js v12부터 ES Module 기능이 정식으로 지원 됩니다.

```json
// pakage.json
"script": {
  "start": "node src",
  "start:dev": "nodemon --watch src/ src/index.js"
  },
"type": "module"
```

```json
// .eslintrc.json
{
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "prettier"],
  "global": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

## Node.js 12 이전

- esm 라이브러리 사용

```javascript
// src/index.js
/* eslint-disable no-global-assign */

require = require("esm")(module /*, option*/);
module.exports = require("./main.js");
```

```json
// package.json
"script": {
  "start": "node -r esm src",
  "start:dev": "nodemon --watch src/ -r esm src/index.js"
},
```

## 자동 완성을 통해 모듈을 불러 오기 위한 설정

```json
// jsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "es2015"
  },
  "include": ["src/**/*"]
}
```
