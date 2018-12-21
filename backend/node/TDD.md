
# TDD
테스트 프레임워크로는 mocha 를 사용하고 Assertion 라이브러리는 chai 를 선택했다. supertest 를 통해서 리퀘스트를 보낼거니 역시 설치하고, 서버는 express 를 이용해 간단하게 만들자.

TDD 는 일반적으로 red, green, refactor 라고 하는 세 단계를 거쳐 이루어진다.

RED 실패하는 테스트를 만들어라.<br>
GREEN 테스트에 통과하도록 코드를 작성하라.<br>
REFACTOR 불필요한 코드를 삭제하라.<br>

```bash
mkdir node-tdd && cd node-tdd
npm init -f 
npm install --save express
npm install --save-dev mocha chai supertest
# ES6 지원을 위해 babel 도 설치하자.
npm install --save-dev babel-cli babel-preset-node6 babel-register
```

```bash
vi .babelrc
{
  "presets": ["node6"]
}
```

```json
  "scripts": {
    "start": "node ./node_modules/babel-cli/bin/babel-node.js index.js",
    "test": "node ./node_modules/mocha/bin/mocha --compilers js:babel-register --recursive ./**/*.spec.js"
  },
```
```javascript
// index.spec.js
import request from 'supertest';
import { expect } from 'chai';

import app from './index';

describe('GET /', () => {
  it('should respond with text message "Hello World"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
          return;
        }

        expect(res.text).to.equal('Hello World');
        done();
      });
  });
});
```

```javascript
// index.js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app.listen(3000, () => {
  console.log('Awesome TDD + ES6 app listening on port 3000!');
});
```

```bash
npm test
```

```bash
npm install --save body-parser
```

```javascript
// index.js
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/login', (req, res) => {
  if (!req.body) {
    res.status(400).send('Bad Request');
    return;
  }

  if (req.body.email !== 'dogpoo@gmail.com' || req.body.password !== 'abcd1234') {
    res.status(401).send('Unauthorized');
    return;
  }

  res.send({
    id: 'vk94z0',
    email: 'dogpoo@gmail.com',
    name: '김개똥',
    age: 20,
  });
});

module.exports = app.listen(3000, () => {
  console.log('Awesome TDD + ES6 app listening on port 3000!');
});
```

테스트 주도 개발은 한번 기본을 터득하고나면 어렵지 않다.  
어려운 것은 사고방식을 전환하는 것이다: TDD 없이는, 무언가를 어떻게 구현할 지 직접적으로 생각한다.  
하지만 TDD를 활용하면, 무엇이 어떻게 동작하길 원하는지 생각한다.  

1. 어떤 입력과 출력(동작)이 함수 호출에 필요한가?  
1. 코드에서 함수를 어떻게 호출할 것인지 결정하기  
1. 생각하는 입력에 대한 동작의 가장 작은 부분 선택하기  
1. 입력값으로 함수를 호출하는 테스트 코드를 작성하고, 동작을 검증하기  
1. 테스트를 충분히 통과하는 코드를 구현  

이런 방식의 간단한 절차를 따르면, 테스트 코드를 미리 작성하는 것이 무척 쉬워진다.  
계속해서 코드를 작성하려면, 단지 3단계에서 5단계를 반복하면 된다.  

기억하자 — 테스트와 코드를 구현한 후 다르게 작동해야만 하는 걸 알아채더라도, 괜찮다! 계속해서 다시하면 된다 — 우리는 첫 술에 배부를 필요가 없으며, 그런 걸 추구해도 가로막힐 뿐이다.   
이것은 TDD 만의 전유물이 아니다: 어쨌거나 당신은 코드의 일부분을 다시 작성하고 리팩토링해야 할 것이고, TDD는 변경된 코드가 망가지진 않았는지 검증하는 테스트로써 그 과정이 안전하도록 도와줄 뿐이다.  

---
참조 : [쉬운 테스트 주도 개발과 단위 테스트를 위한 5단계 방법론](https://medium.com/@cmygray/%EB%B2%88%EC%97%AD-%EC%89%AC%EC%9A%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A3%BC%EB%8F%84-%EA%B0%9C%EB%B0%9C%EA%B3%BC-%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EC%9C%84%ED%95%9C-5%EB%8B%A8%EA%B3%84-%EB%B0%A9%EB%B2%95%EB%A1%A0-b82fea6c8d90)
