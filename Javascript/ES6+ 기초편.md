# ES6+ 기초편

## WHY DID YOU DO THAT?

### 철학

- 합리주의
- 상대주의

### 가치

- 의사소통
- 단순함
- 유연함

### 원칙

- 지역화
- 중복제거
- 대칭성

### 패턴

- 개발론
- 설계론
- 각종 적용 패턴

### 동기

- 시간
- 돈

## PROGRAM & TIME

- LANGUAGE CODE - LINT TIME
- MACHINE LANGUAGE - COMPILE TIME
- FILE
- LOAD
- RUN - RUN TIME
- TERMINATE

## SCRIPT PROGRAM

- LANGUAGE CODE - LINT TIME
- FILE
- LOAD
- MACHINE LANGUAGE
- RUN - RUN TIME
- TERMINATE

## RUNTIME

- LOADING
- INSTRUCTION FETCH & DECODING
- EXECUTION

- ESSENTIAL DFFINITION LOADING
- VTABLE MAPPING
- RUN
- RUNTIME DEFINITION LOADING

## 스크립트 언어는 런타임을 레이어로 나눠서 생각한다.

## LAXICAL GRAMMAR

- CONTROL : 제어문자
- WHITE SPACE : 공백문자
- LINE TERMINATORS : 개행문자
- COMMENTS : 개행문자
- KETWORD : 예약어
- LITERRALS : 리터럴

## LANGUAGE ELEMENT

### STATEMENTS 문

- 공문, 식문, 제어문, 선언문
- 단문, 중문

### EXPERSSION 식별자

- 값식, 연산식, 호출식

### IDENTIFIER

- 기본형, 참조형
- 변수, 상수

## LABEL

- 자바스크립트에서 흐름 제어를 할 수 있다.
- break문 사용(GOTO처럼 사용할 수 있다.)
- \$를 제일 앞에 쓰지 못하는 것 말고는 자바스크립트 변수 선언과 규칙이 같다.
- 스코를 가진다.
- AUTO LABEL이 붙는 경우도 있다.(UNDEFINED NAMED LABEL) : ITERATION, SWITCH
- AS COMMENTS. 주석으로도 사용할 수 있다. 한줄 주석을 뒤에 붙이면 가독성을 헤치기 때문에 앞에 LABEL을 붙인다. 병행 레이블을 사이드 이펙트가 없다.
- 레이블은 유일하게 사용 시 마지막으로 보낸다.
- 자바와 자바스크립트에서 레이블은 같다.

```javascript
temp38: {
  for (var i = 0; i < 10; i++) {
    if (i == 5) break temp38;
    console.log(i);
  }
}
```

## SWITCH

- 스위치의 중괄호는 중문이 아니라 문법적인 요소다.
- 스페셜 레이블 구간이다. AUTO LABEL
- 케이스 레이블과 default label만 쓸 수 있다.
- default를 위에 써도 될 수도 있다. 값 평가에 우선 순위는 낮다.

```javascript
var a = true;
temp17:
  switch(a) {
    default: console.log('c');
    case f1(a): console.log('a'); break temp17;
    case f2(a): console.log('b');
  }
  console.log('end');
  switch(true) {
    case: network() === 'online';
    case: network() === 'wifi';
    case: network() === 'offline'l
    case: localCache()
    default: // 안내문 ..
  }

  var c = 2;
  switch(true) {
    case c++ > 5: console.log(c); break;
    case c++ > 5: console.log(c); break;
    case c++ > 5: console.log(c); break;
    case c++ > 5: console.log(c); break;
    case c++ > 5: console.log(c); break;
  }
```

## interface

1. 인터페이스란 사양ㅇ에 맞는 값과 연결된 속성키의 셋츠
2. 어떤 오프젝트라도 인터페이스의 정의를 충족시킬 수 있다.

### iterator interface

1. next라는 키를 갖고
2. 값으로 인자를 받지 않고 iteratorResultObject를 반환하는 함수가 온다.
3. iteratorResultObject는 value와 done이라는 키를 갖고 있다.
4. 이 중 done은 계속 반복할 수 있을지 없을지에 따라 불린값을 반환한다.

```javascript
{
  next() {
    return {value: 1, done: false};
  }
}
{
  data: [1,2,3,4]
  next() {
    return {
      done: this.data.length == 0,
      value: this.data.pop()
    }
  }
}
```

### iterable interface

1. Symbol.iterator라는 키를 갖고
2. 값으로 인자를 받지 않고 iterator Object를 반환하는 함수가 온다.

```javascript
{
  [Symbol.iterator]() {
    return {
      next() {
        return {value: 1, done: false}
      }
    }
  }
}
```

#### 사용자 반복 처리기

- 직접 Iterator 반복처리기를 구현

```javascript
const loop = (iter, f) => {
  // Iterable이라면 Iterator를 얻음
  if (typeof iter[Symbol.iterator] == "function") {
    iter = iter[Symbol.iterator]();
  }

  // IteratorObject가 아니라면 건너뜀
  if (typeof iter.next != "function") return;

  do {
    const v = iter.next();
    if (v.done) return; // 종료처리
    f(v.value); // 현재 값을 전달함
  } while (true);
};

const iter = {
  arr: [1, 2, 3, 4],
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      done: this.arr.length == 0,
      value: this.arr.pop()
    };
  }
};

loop(iter, console.log);
// 4
// 3
// 2
// 1
```

#### 내장반복처리기

```javascript
const iter = {
  [Symbol.iterator]() {
    return this;
  },
  arr: [1, 2, 3, 4],
  next() {
    return {
      done: this.arr.length == 0,
      value: this.arr.pop()
    };
  }
};

// Array destructuring(배열해체)
const [a, ...b] = iter;
console.log(a, b);
// 4. [3, 2, 1]

// Spread(펼치기)
const a = [...iter];
console.log(a);
// [4, 3, 2, 1]

// Rest Parameter(나머지 인자)
const test = (...arg) => console.log(arg);
tset(...iter);
// [4, 3, 2, 1]

// For of
for (const v of iter) {
  console.log(v);
}
// 4
// 3
// 2
// 1
```

### 제곱을 요소로 갖는 가상컬렉션

```javascript
const N2 = class {
  constructor(max) {
    this.max = max;
  }
  [Symbol.iterator]() {
    let cursor = 0,
      max = this.max;
    return {
      done: false,
      next() {
        if (cursor > max) {
          this.done = true;
        } else {
          this.value = cursor * cursor;
          cursor++;
        }
        return this;
      }
    };
  }
};
```

### Iterator의 구현을 돕는 Generator

```javascript
const generator = function*(max) {
  let cursor = 0;
  while (cursor < max) {
    yield cursor * cursor;
    cursor++;
  }
};
```

### ABSTRACT LOOP

- 팩토리 + 컴포지트 + ES6 Iterable

```javascript
const Operator = class {
  static factory(v) {
    if (v instanceof Object) {
      if (!Array.isArray(v)) v = Object.values(v);
      return new Array(v.map(v => Operator.factory(v)));
    } else return new PrimOp(v);
  }
  constructor(v) {
    this.v = v;
  }
  *gene() {
    throw "override";
  }
};
const PrimOp = class extends Operator {
  constructor(v) {
    super(v);
  }
  *gene() {
    yield this.v;
  }
};
const ArrayOp = class extends Operator {
  constructor(v) {
    super(v);
  }
  *gene() {
    for (const v of this.v) yield* v.gene();
  }
};
for (const v of Operator.factory([1, 2, 3, { a: 4, b: 5 }, 6, 7]).gene())
  console.log(v);
```

### LAZY EXECITION

#### YIELD

```javascript
const Stream = class {
  static get(v) {
    return new Stream(v);
  }
  constructor(v) {
    this.v = v;
    this.filters = [];
  }
  add(gene, ...arg) {
    this.filters.push(v => gene(v, ...arg));
    return this;
  }
  *gene() {
    let v = this.v;
    for (const f of this.filters) v = f(v);
    yield v;
  }
};
const odd = function*(data) {
  for (const v of data) if (v % 2) yield v;
};
const take = function*(data, n) {
  for (const v of data)
    if (n--) yield v;
    else break;
};
for (const v of Stream.get([1, 2, 3, 4])
  .add(odd)
  .add(take, 2)
  .gene())
  console.log(v);
```

## 자바스크립트 쓰레드

- MAIN UI THREAD 1
- BACKGROUND THREAD N
- WEB WORKER THREAD

## BLOCKING EVASION

```javascript
const looper = (n, f, ms = 5000, i = 0) => {
  let old = performance.now(),
    curr;
  const runner = curr => {
    while (i < n) {
      if (curr - old < ms) f(i++);
      else {
        old = performance.now();
        requestAnimationFrame(runner);
        break;
      }
    }
  };
  requestAnimationFrame(runner);
};
```

## SYNC / ASYNC

### SYNC : 서브루틴이 즉시 값을 반환함

```javascript
const double = v => v * 2;
console.log(double(2)); // 4
```

#### SYNC BLOCK

- 즉시 플로우제어권을 반환하지 않음
- normalAPI, legacyAPI

```javascript
const sum = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += 1;
  return sum;
};
sum(100);
```

#### SYNC NON BLOCK

- 즉시 플로우 제어권을 반화함
- oldAPI, IOCP, Future, complete

```javascript
const sun = n => {
  const result = { isComplete: false };
  requestAnumationFrame(_ => {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += 1;
    result.isComplete = true;
    result.value = sum;
  });
  return result;
};
const result = sum(100);
const id = setInterval(() => {
  if (result.isComplete) {
    clearInterval(id);
    console.log(result.value);
  }
}, 10);
```

### ASYNC : 서브루틴이 콜백을 통해 값을 반환함

```javascript
const double = (v, f) => f(v * 2);
double(2, console.log); // 4
```

#### ASYNC BLOCK

- 즉시 플로우제어권을 반환하지 않음
- TRAP

```javascript
const sum = (n, f) => {
  let sum = 0;
  for (let i = 1; i < n; i++) sum += 1;
  return f(sum);
};
sum(10, console.log);
console.log(123);
// 55 -> 123
```

#### ASYNC NON BLOCK

- 즉시 플로우 제어권을 반화함
- modernAPI

```javascript
const sum = (n, f) => {
  requestAnimaionFrame(_ => {
    let sum = 0;
    for (let i = 1; i < n; i++) sum += 1;
    f(sum);
  });
};
sum(10, console.log);
console.log(123);
// 123 -> 55
```

## SIMILAR ASYNC-BLOCK

```javascript
const sum = (n, f) => {
  requsetAnimationFrame(_ => {
    let sum = 0;
    for (let i = 1; i < n; i++) sum += 1;
    f(sum);
  });
};
sum(1000000000, console.log);
console.log(123);
```

- 워커를 너무 많이 만들어도 ASYNC-BLOCK를 일으킬 수 있다.

```javascript
const backRun = (f, end, ...arg) => {
  const blob = new Blob(
    [
      `
    onmessage = e => postMessage((${f})(e.data));
  `
    ],
    { type: "text/javascript" }
  );
  const url = URL.createObjectURL(blob);
  const worker = new Worker(url);
  worker.onmessage = e => end(e.data);
  worker.onerror = e => end(null);
  worker.postMessage(arg);
};
const f = v => {
  for (let i = 1, sum = 0; i <= v[0]; i++) {
    sum += 1;
  }
  return sum;
};
let i = 1000;
while (i--) backRun(f, console.log, 1000000);
```

## TIME SLICING MANUAL USING GENERATOR

```javascript
const loop = function*(n, f, slice = 3) {
  let i = 0,
    limit = 0;
    while (i < n) {
      if (limit++ < slice) f(i++);
      else {
        limit = 0;
        yield
      }
    }
  };
};

// 실행기 변경 가능
const executor = iter => {
  const runner = _=> {
    if(!iter.next().done)
    requestAnimaionFrame(runner);
  }
  requestAnimaionFrame(runner);
}
executor(loop(10, console.log));

// const executor = iter => {
//   const id = setInterval(_=> {
//     if(iter.next())clearInterval(id)
//   },10);
// };

// 기존 코드
// const looper = (n, f, slice = 3) => {
//   let i = 0,
//     limit = 0;
//   const runner = _ => {
//     while (i < n) {
//       if (limit++ < slice) f(i++);
//       else {
//         limit = 0;
//         requsetAnimaionFrame(runner);
//       }
//     }
//   };
//   requsetAnimaionFrame(runner);
// };
// looper(10, console.log);
```

## GENERATOR + ASYNC + EXECUTOR

- 코루틴 패턴

```javascript
const profile = function*(end, next, r) {
  const userid = yield $.post("member.php", { r }, next);
  let added = yield $.post("detail.php", { userid }, next);
  added = added.split(",");
  end({ userid, nick: added[0], thumb: added[1] });
};
const executor = (end, gene, ...arg) => {
  const next = v => iter.next(v);
  const iter = gene(end, next, ...arg);
  iter.next();
};
executor(profile, console.log, 123);
```

## GENERATOR + PROMISE

```javascript
const profile = function*(end, next, r) {
  const userid = yield new Promise(res => $.post("member.php", { r }, res));
  let added = yield new Promise(res => $.post("detail.php", { userid }, res));
  added = added.split(",");
  end({ userid, nick: added[0], thumb: added[1] });
};
const executor = (gene, end, ...arg) => {
  const iter = gene(end, ...arg);
  const next = ({ value, done }) => {
    if (!done) value.then(v => next(iter.next(v)));
  };
  next(iter.next());
};
executor(profile, console.log, 123);
```

## AWAIT PROMISE = SYNC

```javascript
const profile = async function(end, next, r) {
  const userid = await new Promise(res => $.post("member.php", { r }, res));
  let added = await new Promise(res => $.post("detail.php", { userid }, res));
  added = added.split(",");
  end({ userid, nick: added[0], thumb: added[1] });
};
profile(profile, console.log, 123);
```

- awiat가 제네레이터에 비해 부족한 점이 있어서 ES8에서 async generator도 나왔다.
