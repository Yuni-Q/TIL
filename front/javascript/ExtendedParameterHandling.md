
# Extended Parameter Handling

## 1. 파라미터 기본값 (Default Parameter value)
```javascript
// ES5
function plus(x, y) {
  x = x || 0; // 매개변수 x에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  y = y || 0; // 매개변수 y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.

  return x + y;
}

console.log(plus());     // 0
console.log(plus(1, 2)); // 3

// ES6
function plus(x = 0, y = 0) {
  // 파라미터 x, y에 인수를 할당하지 않은 경우, 기본값 0을 할당한다.
  return x + y;
}

console.log(plus());     // 0
console.log(plus(1, 2)); // 3
```

## 2. Rest 파라미터

### 2.1 기본 문법
Rest 파라미터(Rest Parameter)는 Spread 연산자(...)를 사용하여 파라미터를 정의한 것을 의미한다.  
Rest 파라미터를 사용하면 인수의 리스트를 함수 내부에서 배열로 전달받을 수 있다.  

### 2.2 arguments와 rest 파라미터
ES5에서는 인자의 개수를 사전에 알 수 없는 가변 인자 함수의 경우, arguments 객체를 통해 인수를 확인한다.  
arguments 객체는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회가능한(iterable) 유사 배열 객체(array-like object)이며 함수 내부에서 지역 변수처럼 사용할 수 있다.  

가변 인자 함수는 파라미터를 통해 인수를 전달받는 것이 불가능하므로 arguments 객체를 활용하여 인수를 전달받는다. 하지만 arguments 객체는 유사 배열 객체이므로 배열 메소드를 사용하려면 Function.prototype.call을 사용해야 하는 번거로움이 있다.  

ES6에서는 rest 파라미터를 사용하여 가변 인자를 함수 내부에 배열로 전달할 수 있다. 이렇게 하면 유사 배열인 arguments 객체를 배열로 변환하는 등의 번거로움을 피할 수 있다.  

하지만 ES6의 화살표 함수에는 함수 객체의 arguments 프로퍼티가 없다. 따라서 화살표 함수로 가변 인자 함수를 구현해야 할 때는 반드시 rest 파라미터를 사용해야 한다.  

## 3. Spread 연산자
Spread 연산자(Spread Operator, ...)는 연산자의 대상 배열 또는 이터러블을 개별 요소로 분리한다.  

### 3.1 함수의 인자로 사용하는 경우
배열을 함수의 인자로 사용하고, 배열의 각 요소를 개별적인 파라미터로 전달하고 싶은 경우, Function.prototype.apply를 사용하는 것이 일반적이다.  
```javascript
// ES5
function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

// 배열을 foo 함수의 인자로 전달하려고 한다.
const arr = [1, 2, 3];

// apply 함수의 2번째 인자(배열)는 호출하려는 함수(foo)의 개별 인자로 전달된다.
foo.apply(null, arr);
// foo.call(null, 1, 2, 3);

// ES6
function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

// 배열을 foo 함수의 인자로 전달하려고 한다.
const arr = [1, 2, 3];

/* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
   spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. */
foo(...arr);
```

### 3.2 배열에서 사용하는 경우
[concat, push, splice, copy] Spread 연산자를 사용하면 보다 간편하게 배열을 복사할 수 있다.  

### 3.3 객체에서 사용하는 경우
Spread 연산자를 사용하면 객체를 손쉽게 병합 또는 변경할 수 있다.  
```javascript
// 객체의 병합
const merged = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = { ...{ x: 1, y: 2 }, y: 100 };
// changed = { ...{ x: 1, y: 2 }, ...{ y: 100 } }
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = { ...{ x: 1, y: 2 }, z: 0 };
// added = { ...{ x: 1, y: 2 }, ...{ z: 0 } }
console.log(added); // { x: 1, y: 2, z: 0 }
```
Object.assign 메소드를 사용해도 동일한 작업을 할 수 있다.  
Spread 연산자를 사용하면 유사 배열 객체(Array-like Object)를 배열로 손쉽게 변환할 수 있다.  

---
참조 : [파라미터 기본값, Rest 파라미터, Spread 연산자](https://poiemaweb.com/es6-extended-parameter-handling)
