
# require-directory
서버를 구축하면서 비지니스 로직을 Services로 분리하던 중 Service에서는 다른 Service를 호출이 불가능한 문제가 발생 했습니다.  

## 기존 코드
```javascript
// services.index.js
module.exports = {
  aaServices: require('./aaServices'),
  bbServices: require('./bbServices'),
  ccServices: require('./ccServices'),
};
```

```javascript
// services.bb.js
const services = require('../services');
console.log(services.aaServices); // undefind
```

## 수정 코드
```javascript
// services.index.js
const requireDirectory = require('require-directory');

module.exports = requireDirectory(module);
```

```javascript
// services.bb.js
const requireDirectory = require('require-directory');

const services = requireDirectory(module, '../services');
```

## 문제점
command + click로 찾아 들어 갈 수 없습니다.  

## 다른 방법
services의 index를 통하지 않고 직접 호출 할 경우에는 문제없이 가능 합니다.  

