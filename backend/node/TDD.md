
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