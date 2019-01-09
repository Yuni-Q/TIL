
```javascript
const { paths } = require('../services/base');
const steams = require('../services/steams').paths;
const { definitions } = require('../services/definitions');

Object.keys(steams).forEach((key) => {
  paths[key] = steams[key];
});

// Object.keys(models).forEach((key) => {
//   res[key] = models[key];
// });


const res = {
  swagger: '2.0',
  info: {
    title: 'API',
    version: 'v1',
    description: 'API를 표시합니다',
  },
  host: 'localhost:8080',
  license: {
    name: 'Apache 2.0',
    url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
  },
  schemes: [
    'https',
    'http',
  ],
  paths,
  securityDefinitions: {
    apiKey: {
      type: 'apiKey',
      name: 'api_token',
      in: 'query',
    },
  },
  definitions,
};

console.log(res);

module.exports = {
  api: () => (res),
};
```