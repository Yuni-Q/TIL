
# Node
|NPM|기능
|---|--
|npx| global로 패키지를 설치하지 않더라도 프로젝트 내에서 사용할 수 있게 해준다.
|nodemon| 파일이 변화될 때마다 재실행해준다.
|typescript| typescript로 구성한 코드를 javascript로 트랜스파일링 해준다.
|npm-run-all| 여러 npm 실행 명령을 병렬로 실행할 수 있게 해준다.
|webpack| 요즘 각광받는 모듈 번들러
|webpack-cli| webpack 명령을 사용하기 위한 CLI도구
|source-map-support| typescript로 개발시 source-map을 지원해준다.
|@types/express| express 모듈에 대한 type을 지원해준다.

## 기본 설정하기
```bash
$ npx tsc --init
```

### tsconfig.json
```json
{
  "compilerOptions": {
     "lib": [
        "es5",
        "es6"
     ],
     "target": "es5",
     "module": "commonjs",
     "moduleResolution": "node",
     "outDir": "./build",
     "emitDecoratorMetadata": true,
     "experimentalDecorators": true,
     "sourceMap": true
  }
}
```

## config/webpack.config.js
```javascript
const path = require('path');

module.exports = {
  entry: './src/www.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

## src/App.ts
```typescript
import * as express from "express";

class App {
  public app: express.Application;

  /**
   * @ class App
   * @ method bootstrap
   * @ static
   * 
   */
  public static bootstrap (): App {
    return new App();
  }

  constructor () {
    this.app = express();
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("Hello world");
    });
  }
}

export default App;
```

## src/www.ts
```typescript
import 'source-map-support/register'; // source-map을 사용하기 위해 추가함.
import App from './App';
import * as express from "express";

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

app.listen(port, () => console.log(`Express server listening at ${port}`))
.on('error', err => console.error(err));
```

## package.json
```typescript
{
  "start": "nodemon --watch src --delay 1 --exec 'ts-node' src/www.ts",
  "build": "webpack --config webpack.config.js"
}
```

## 배포
```bash
# Webpack을 사용하여 번들링한다.
npm run build

practice_node_server@1.0.0 build practice_node_server
webpack --config webpack.config.js


# Bundled file을 실행해본다.
node dist/bundle.js
# Express server listening at 3000
```

## 추가적으로 초기에 build될 때 엄청나게 restart할 경우가 있는데, 이는 nodemon옵션으로 조절할 수 있다.
```bash
nodemon --delay 10 server.js  # 10초
nodemon --delay 2.5 server.js # 2.5초
nodemon --delay 2500ms server.js  # 2.5초
```

---
참조 : [TypeScript로 Node.js Express 서버 개발하기](https://novemberde.github.io/node/2017/10/22/Express-Typescript.html)