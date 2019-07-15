67. 무엇이 출력 될까요?
    // index.js
    console.log('running index.js');
    import { sum } from './sum.js';
    console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
A: running index.js, running sum.js, 3
B: running sum.js, running index.js, 3
C: running sum.js, 3, running index.js
D: running index.js, undefined, running sum.js
정답
정답: B
import 키워드를 사용하면, 모든 import된 modules은 우선-파싱 되어요. import된 모듈은 처음에 실행되는 것을 의미하고, import한 파일 안에 있는 코드는 나중에 실행돼요.

이것은 CommonJSd의 require()와 import의 차이예요! require()을 사용하면, 런타임 중 코드에서 필요한 시점에 의존성 모듈을 로드 할 수 있어요. 만약 import 대신에 require을 사용하면, running index.js, running sum.js, 3으로 콘솔에 출력될 거에요.

---

출처 : [javascript-questions](https://github.com/lydiahallie/javascript-questions/blob/master/README-ko_KR.md)
