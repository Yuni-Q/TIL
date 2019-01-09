
# multi host
한 프로젝트 안에 여러개의 스웨거 페이지를 두거나  
한 페이지의 스웨거에서 여러 호스트를 두는 방안을 고려  

1. swagger 2.0에서는 현재 불가능 한 것으로 보임 ( openapi 3.0에서는 지원을 하나 아직 node에서 openapi 3.0을 지원하지 않는 것으로 추정 )
1. 여러개의 호스트를 두는 방안
- swagger-ui는 방식이 예전 것인지 잘 활용하지 못하겠음 ( 인터넷에 가장 쉽게 올라온 예제는 15년도 것으로 많이 바뀌었을 것으로 생각 )
- swagger-ui-expres는 여러 페이지 사용이 불가능 한 것으로 추정 ( 마지막 setup 된 것으로 모두 덮어 버린다. )

```javascript
const express = require('express');

const app = express();

const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');
const steamsDocument = YAML.load('./api/swagger/streams.yaml');

  swaggerExpress.register(app);
  app.use('/health', healthRouter);
  function streams(req, res, next) {
    console.log('bbbb')
    app.use('/streams', swaggerUi.serve);
    app.get('/streams', swaggerUi.setup(steamsDocument));
    next();
  }
  function swagger(req, res, next) {
    console.log('aaaa')
    app.use('/', swaggerUi.serve);
    app.get('/', swaggerUi.setup(swaggerDocument));
    next();
  }
  app.get('/streams', streams);
  app.get('/', swagger);
  ```
  > 성공 !!