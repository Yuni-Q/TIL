
# use strict

use strict'는 전체 스크립트나 개별 함수에 엄격 모드를 사용하는데 사용되는 명령문입니다.  
Strict 모드는 JavaScript 제한된 변형에서 선택하는 방법입니다.  

## 장점
- 실수로 전역변수를 만드는 것이 불가능합니다.
- 암묵적으로 실패한 예외를 throw하지 못하는 할당을 만듭니다.
- 삭제할 수 없는 속성을 삭제하려고 시도합니다. (시도 효과가 없을 때까지)
- 함수의 매개변수 이름은 고유해야합니다.
- this는 전역 컨텍스트에서 undefined입니다.
- 예외를 발생시키는 몇 가지 일반적인 코딩을 잡아냅니다.
- 헷갈리거나 잘 모르는 기능을 사용할 수 없게 합니다.

## 단점
- 일부 개발자는 익숙하지 않은 기능이 많습니다.
- function.caller와 function.arguments에 더 이상 접근할 수 없습니다.
- 서로 다른 엄격한 모드로 작성된 스크립트를 병합하면 문제가 발생할 수 있습니다.

### 전반적으로 장점이 단점보다 중요하다고 생각합니다. 엄격 모드가 차단하는 기능에 의존하지 않아도 됩니다. 엄격한 모드를 사용하는 것을 추천합니다.

---
참조 : [JS 질문](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Korean/questions/javascript-questions.md)
