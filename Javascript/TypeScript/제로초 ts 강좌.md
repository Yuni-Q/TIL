# ts 기초

- interface는 extends로 확장할 수 있다.
- 따로따로 적어도 합쳐져서 남의 라이브러리 쉽게 수정할 수 있다.
- 어떤 값이 들어올지 모른다면 여유를 줄 수 있다.

```typescript
interface Example {
  [c: string]: any;
}
```

- type은 유니온이랑 같이 쓰는 경향이 많다. 객체는 interface
- keyof interface으로 인터페이스의 키를 사용 가능
- as로 형변환
- 일반 function은 첫번째 인수에 this: HTMLButtonElement를 사용한다.

```typescript
btn.addEventListener("click", function(this: HTMLButtonElement, e: Event) {});
```

- 작은 집합은 큰 집합에 들어 갈 수 있지만 작은 집합은 큰 집합에 들어 갈 수 없다. 하지만 일치하는게 좋다.
- 타입을 확정하려면 !(느낌표)를 사용하면 된다. 그 외에는 변수로 뺀 다음 if로 null | undefiend가 아님을 명시한다. 위에서 throw를 하는 방법도 있지만 둘 다 에러의 발생 여부가 있기 때문에 고심해 보아야 할 부분이다.
- 타입스크립트가 같은 것인지 판단 못할 경우에는 변수로 빼서 사용하면 인식할 수 있다.

- strictNullChecks가 false면 null과 undefined를 구분하지 않는다.

  - strictNullChecks가 false가 아니면 ?(물음표)의 경우 undefined만 허용하기 때문에 `| null`을 추가해 주어야 합니다.

- 자바 최신 문법에서 클래스 변수의 #(private)이 추가 되었지만 너무 최신 문법이라 호환이 힘들다. typescript에서는 public, protected, private 모두 지원한다.

- interface에서 extends는 포함한 하위 속성으로 타입을 제한하는 용도로 사용한다.

## interface

```typescript
interface obj<T> {
  add: (a: T, b: T) => T;
}

// 아래와 같이 하면 밑에 모든 예제 ERROR 없음
// interface obj {
//   add: (a: string | number, b: string | number) => string | number;
// }

const a: obj<string> = {
  add: (a, b) => a + b
};
const b: obj<number> = {
  add: (a, b) => a + b
};

a.add("a", "b"); // 정상 동작
a.add(1, 2); // ERROR
a.add("a", 2); // ERROR
b.add("a", "b"); // ERROR
b.add(1, 2); // 정상동작
```

## never

```typescript
interface Example {
  // 타입이 never가 되어서 어떠한 것도 넣을 수 없다.
  a: [];
  // string 배열
  b: string[];
  // b: string[]; === c: Array<string>;
  c: Array<string>;
}
```

## 타입 가드

- 기존에 Card인 타입을 Sub로 바꿀 수 있다.

```typescript
function isSub(data: Card): data is Sub {
  if (data.cost) {
    return true;
  }
  return false;
}

if (isSub(data) && data.cost) {
}
```

## 모듈 시스템

- commonjs 방법

```javascript
const hello = "hello";

module.exports = hello;
```

```javascript
const hello = require("./hello");

exports.a = "a";
exports.b = false;

// module.exports와 exports는 같은 객체이기 때문에 위에 부분이 적용되지 않는다.
// ES2015에서 이를 해결하기 위해 default를 만들었다.
module.exports = {
  a: "a",
  b: false
};
```

- ES2015

```javascript
const b = false;

export const a = "a";
export { b };

// module.exports와 다르다.
export default function() {}
```

```javascript
import hello, { a, b } from "./hello";
// module.exports에 경우 아래와 같이 사용해야 한다. ts에서 특정 옵션(esmoduleinterop)을 켜서 무시할 수도 있다.
// import * as hello from "./hello";
```

- ts

```javascript
// common.js
module.exports = function() {
  console.log("hi");
};
```

```typescript
// common.d.ts
// 타입을 만들기 위해 declare를 사용
declare function a() {
};
export = a;
```

```javascript
import A = require('./common')
import * as A from './common'
```

- referrance

```typescript
// type(패키지 이름)과 path(경로)가 있다.
// 참조할 때 사용. 직접 코등할때는 거의 쓰일 일이 없다.
/// <reference type="symbol-observavle>
```

- import 한것 바로 export 하기

```javascript
export * from "d3-array";
```

- 유형

1. typescript로 만들어진 패키지
2. index.d.ts 지원
3. DefinitelyTyped 지원
4. types 폴더를 만들고 d.ts 파일을 직접 만든다. tsconfig에 typeRoots를 만들어 준다.
5. 잘못된 타입의 경우. 타입을 지우고 직접 정의 한다.

## 글로벌 타입 넣을 때 문제해결 꼼수

```typescript
// export가 없으면 안 된다.
exprot {}
declare globla {
  interface Window {
    hello: string;
  }
  interface Error {
    code?: any;
  }
}
```

## 유틸리티

- Partial, Readonly, Record, Pick, Omit, Exclue, Extract, ReturnType, Required, OmitThisParameter, ThisType가 많이 쓰인다.
- 타이핑 할때 편하게 사용할 수 있다.
- 중복을 줄일 때 도움을 준다.

## 데코레이터

- 클래스에서 중복을 제거하기 위해 사용한다.(공통 로직 분리)
- tsconfig.json에서 "experimetalDecorators"가 true여야 한다.
  - 아직 stage2에 있어서 아직 불안정하다. 아직 실험적인 기능이다.(stage4가 안정)
- 클래스, 프로퍼티, 메소드, 파라미터, 엑세스에 붙일 수 있다.
- 위에 쓰면 아래에, 왼쪽에 쓰면 오른쪽에 적용 된다.
- 데코레이터를 잘 쓰려면 reflect-metadata에 대한 공부가 필요하다.
- 꾸며주는 역할(기능을 추가, 수정, 덮어쓰기)
- 고차함수처럼 사용

```typescript
function makeGender(target: typeof Person) {
  console.log("hello");
  return class extends target {
    gender = "male";
    sayGender() {
      return this.gender;
    }
  };
}

function readonly(target: any, key: any, descriptor: PropertyDescriptor) {
  console.log(target, key, descriptor);
  descriptor.writable = false;
}

function readonlyProperty(target: any, key: any, index: number) {
  console.log(target, key, index);
}

@makeGender
class Person {
  title: string;
  age = 27;
  constructor(title: string) {
    this.title = title;
  }
  @readonly
  setTitle(@readonlyProperty title: string) {
    this.title = title;
  }
  @readonly
  sayTitle(): any {
    return this.title;
  }
}

@makeGender
class Person2 {
  title: string;
  age = 27;
  constructor() {}
  setTitle(title: string) {}
  sayTitle(): any {
    return this.title;
  }
}
```

```typescript
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px"
} as const;

// '0' | '-142px' | '-284px'
type imgCoords = typeof repCoords[keyof typeof rspCoords];
```

- react-router 타입핑
  - RouteComponentProps, RouteChildernProps 중 사용
  - RouteChildernProps<{name: string}>처럼 params를 넣어서 사용
- function component에서는 useRouteMatch, useLocation, useHistory 사용
