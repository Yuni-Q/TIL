
# Async-await
Async-await는 ECMA-262에서 초안으로 처음 등장했으며, ECMAScript 2017에서 표준으로 정의 되었습니다.  
동기 프로그래밍을 동기 방식처럼 직관적으로 표현할 수 있어서, Callback을 많이 사용하는 프론트엔드 개발자들에게 많은 사랑을 받고 있습니다.  

# Promise를
## Callback 대신에 Promise를 사용할 때의 장점과 단점은 무엇입니까?

### 장점
- 이해하기 어려운 콜백 지옥을 피할 수 있습니다.
- 읽기 쉬운 .then()을 이용하여 연속적인 비동기 코드를 쉽게 작성할 수 있습니다.
- Promise.all()을 사용하여 병렬 비동기 코드를 쉽게 작성할 수 있습니다.

### 단점

- 약간 더 복잡한 소스코드(논쟁의 여지가 있음)
- ES2015를 지원하지 않는 이전 브라우저에서 이를 사용하기 위해서는 polyfill을 로드해야 합니다.

---
참조 : [JS 질문](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Korean/questions/javascript-questions.md)
