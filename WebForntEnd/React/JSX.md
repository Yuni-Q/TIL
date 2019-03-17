
# JSX

- JSX는 그저 createElement 같은 React 메서드를 위한 문법적 개선이다.
- JSX에서는 표준 HTML 속성인 class와 for 대신 className, HTMLFor를 사용한다.
- JSX에서 스타일(style) 속성을 입력할 때는 HTML처럼 문자열을 사용하지 않고 자바스크립트 객체를 전달한다.
- 삼항 연산자와 즉시실행함수는 JSX에서 if/else 문을 처리하는 좋은 방법이다.
- 변수, 주석, HTML 엔터티 코드를 출력하고, JSX 코드를 네이티브 자바스크립트 코드로 변경하는 것은 쉽다.
- JSX를 자바스크립트로 변환하느 방법이 몇 가지 있다. Babel CLI를 이용한 컴파일 방법은 Gulp, Webpack 같은 도구를 사용하여 빌드 설정을 하거나 Node.js 또는 자바스크립트로 Babel API를 직접 이용한 스크립트를 작성하는 방법에 비해 설정해야 할 부분이 적다.

## 퀴즈
- JSX에서 자바스크립트 변수를 출력하려면 {}를 사용해야 한다.
- class 속성은 JSX에서 사용할 수 없다(className 사용)
- 속성에 값을 입력하지 않은 경우 적용되는 기본값은 ture이다. 하지만 명시적으로 사용하는 것을 추천한다.
- JSX의 인라인 스타일 속성은 다른 속성처럼 문자열이 아닌 자바스크립트 객체다(성능 개선을 목적으로)
- JSX에서 if/else가 필요한 경우 삼항 연산자를 사용해야 한다
- 중괄호 내에서 return 문을 사용하는 것은 유효하지 않다.