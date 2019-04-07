# React와 Node.js를 이용한 유니버셜 자바스크립트
- 서버에서 React를 사용하고 렌더링하려면 react-dom/server와 renderToString()이 필요하다.
- 서버에서 생성한 ReactHTML과 브라우저 React를 동기화하려면 동일한 데이터를 사용해야 한다. React는 체크섬을 사용하여 비교한다.
- renderToString()과 renderToStaticMarkup()의 차이점은 renderToString()에는 브라우저 React가 HTML을 재사용할 수 있도록 체크섬이 포함되 었고, renderToStaticMarkup()에는 체크섬이 포함되어 있지 않다는 점이다.
- 유니버셜 자바스크립트를 구현하기 위해 서버에서 React를 렌더링한 후, 브라우저 React에 동잉한 데이터를 제공하여 브라우저 쪽의 React 컴포넌트를 렌더링 한다.
- Handlebars에서 중괄호 세 개를 사용하여 {{{html}}}로 입력하면 이스케이프 처리하지 않은 HTML을 출력할 수 있다.

## 퀴즈
- 서버에서 React 컴포넌트를 렌더링 할 때 사용하는 메서는 renderToString()이다.
- 첫 페이지를 서버에서 렌더링하면 성능을 향상시킬 수 있다. renderToStaticMarkup()은 체크섬을 렌더링하지 않는다.
- Webpack과 함께 CommonJS와 Node.js 모듈 문법인 require()를 사용하면 브라우저 코드에서 npm 모듈을 불러올 수 있다.
- Handlebars에서 이스케이프 처리하지 않은 문자열을 출력하기 위해 사용하는 벙법은 {{{...}}}이다.
- 브라우저 React에서 처리하는 AJAX/XHR 요청이 서버에서 호출되지 않도록 AJAX/XHR 요청을 처리하기에 가장 적절한 위치는 componentDidMount()이다.