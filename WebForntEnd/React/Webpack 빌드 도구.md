
# Webpack 빌드 도구
- Webpack은 자바스크립트만을 위한 도구는 아니다. 로더(loader)를 이용하면 다른 정적 자원에 대해 전처리도 가능라다.
    - JSX, Jade, CoffeeScript 파일을 자바스크립트 파일로 변환한다.
    - ES6 미지원 브라우저를 대으앟기 위해 ES6+ 코드를 ES5 코드로 변환한다.
    - Sass나 Compass로 작성된 스타일 파일을 CSS로 변환한다.
    - 스프라이트 이미지를 하나의 PNG 파일이나 JPG 파일 또는 인라인 데이터 URI 이미지로 최적화 한다.
- 핫 모듈 대체를 작동시키려면 webpack-dev-server를 사용하고 설정에 react-hot-loader를 추가하거나 원하는 파일에 module.hotaccept()를 적용해야 한다.
- style-loader와 css-loader를 사용하면 require()문으로 CSS를 불러올 수 있다.
- 명령줄로 --inline --hot 옵션을 추가해서 WDS를 실행하면 HMR이 적용된다.
- 설정에 devtool: '#sourcemap'을 추가하면 컴파일된 코드에서 원본 코드의 줄번호를 확인할 수 있다.
- WDS를 사용할 때는 publicPath 설정으로 번들 파일의 위치를 지정한다.

## 퀴즈
- npm 스크립트의 dev 항목("dev" : "./node_modules/.bin/webpack-dev-server --config webpack.dev.config.js")을 실행하려면 npm run dev로 실행해야 한다.
- HMR은 실시간 새로고침을 대체할 수 있으며, HMR에 실패하는 경우에는 페이지를 새로고침한다. 그렇지만 HMR은 앱의 상태를 유지하면서 일부분만 갱신할 수 있는 기능과 같은 더 나은 기능과 이점을 제공한다.
- WDS는 webpack 파일을 제공하기만 하며 디스크에 저장하지 않는다.
- webpack.config.js 파일은 Webpack 설정을 위한 기본 파일이다. 이 파일은 반드시 CommonJS 모듈 형식으로 작성된 Node.js 자바스크립트 파일이어야 하며, 객체 리터럴로 작성한 설정을 내보낸다(객체에 JSON처럼 쌍따옴표를 사용할 수 있기는 하다)
- style-loader로 CSS를 불러오고, css-loader로 CSS를 웹페이지에 삽입한다.