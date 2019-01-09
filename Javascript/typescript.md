
# JavaScript로 컴파일되는 언어로 JavaScript 코드를 작성하는 경우의 장단점은 무엇입니까?
- JavaScript로 컴파일되는 언어의 예로 CoffeeScript, Elm, ClojureScript, PureScript 및 TypeScript가 있습니다.

## 장점

- JavaScript의 오랜 문제점들을 수정하고 JavaScript 안티-패턴을 방지합니다.
- JavaScript 위에 syntatic sugar를 제공함으로써 더 짧은 소스코드를 작성할 수 있도록 해줍니다. 제 생각에는 ES5는 부족하지만 ES2015는 굉장합니다.
- 정적 타입은 시간 경과에 따라 유지 관리해야 하는 대규모 프로젝트에 대해 훌륭합니다(TypeScript의 경우).

## 단점

- 브라우저는 오직 JavaScript만 실행하기 때문에 빌드/컴파일 프로세스가 필요하며 브라우저에 제공되기 전에 JavaScript로 코드를 컴파일해야 합니다.
- 소스 맵이 미리 컴파일된 소스에 잘 매핑되지 않으면 디버깅이 어려울 수 있습니다.
- 대부분의 개발자들은 이러한 언어에 익숙하지 않으므로 이를 배워야합니다. 프로젝트에 사용할 경우 팀의 비용이 증가합니다.
- 소규모 커뮤니티 (언어에 따라 다름)는 리소스, 자습서, 라이브러리 및 툴링을 찾기가 어려울 수 있음을 의미합니다.
- IDE / 편집기 지원이 부족할 수 있습니다.
- 이러한 언어는 항상 최신 JavaScript 표준보다 뒤처집니다.
- 개발자들은 자신들의 코드를 무엇으로 컴파일하고 있는지 알고 있어야 합니다. 왜냐하면 그것이 실제로 실행될 것이고 결국에는 중요한 것이기 때문입니다.
- 실질적으로 ES2015는 JavaScript를 크게 개선하여 작성하기가 훨씬 쉬워졌습니다. 요즘은 CoffeeScript가 필요하지 않습니다.

---
참조 : [JS 질문](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Korean/questions/javascript-questions.md)
