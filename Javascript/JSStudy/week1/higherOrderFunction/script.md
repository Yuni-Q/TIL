
# 고차 함수란 ?
고차 함수는 Higher order function으로  
함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말합니다.  
다시 말해, 고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환 할 수 있습니다.  
자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있습니다.  

```javascript
// 함수를 인자로 전달받고 함수를 반환하는 고차 함수
const makeCounter = (predicate) => {
  // 자유 변수
  let num = 0;
  // 클로저
  return () => {
    num = predicate(num);
    return num;
  };
}

// 보조 함수
const increase = (n) => {
  return ++n;
}

// 보조 함수
const decrease = (n) => {
  return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());
```

## 함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과(Side effect)를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 한 방법이라고 할 수 있습니다.
> 고차 함수는 상태 변경이나 가변(mutable) 데이터를 피하고 불변성(Immutability)을 지향하는 함수형 프로그래밍에 기반을 두고 있습니다.  
> 함수형 프로그래밍은 순수 함수(Pure function)와  
> 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임입니다.  
> 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성을 해치고, 변수의 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있기 때문입니다.  

## 1. Array.prototype.sort(compareFn?: (a: T, b: T) => number): this ✏️ ES1
배열의 요소를 적절하게 정렬한다.  
원본 배열을 직접 변경하며 정렬된 배열을 반환 됩니다.  

```javascript
var fruits = ['Banana', 'Orange', 'Apple'];

// ascending(오름차순)
fruits.sort();
console.log(fruits);

// descending(내림차순)
fruits.reverse();
console.log(fruits);
```

기본 정렬 순서는 문자열 Unicode 코드 포인트 순서에 따릅니다.  
배열의 요소가 숫자 타입이라 할지라도 일시적으로 문자열로 변환되어 정렬 됩니다.  
따라서 10과 2를 비교하면 10이 먼저 오게 됩니다.
```javascript
var points = [40, 100, 1, 5, 2, 25, 10];

points.sort();
console.log(points);
```

```javascript
var points = [40, 100, 1, 5, 2, 25, 10];

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
points.sort( (a, b) => return a - b; );
console.log(points);

// 숫자 배열에서 최소값 취득
console.log(points[0]);

// 숫자 배열 내림차순 정렬
// 비교 함수의 반환값이 0보다 큰 경우, b를 우선하여 정렬한다.
points.sort(function (a, b) { return b - a; });
console.log(points);

// 숫자 배열에서 최대값 취득
console.log(points[0]);
```

```javascript
var todos = [
  { id: 4, content: 'JavaScript' },
  { id: 1, content: 'HTML' },
  { id: 2, content: 'CSS' }
];

// 비교 함수
function compare(key) {
  return function (a, b) {
    // 프로퍼티 값이 문자열인 경우 - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
    return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
  };
}

// id를 기준으로 정렬
todos.sort(compare('id'));
console.log(todos);

// content를 기준으로 정렬
todos.sort(compare('content'));
console.log(todos);
```

## 2. Array.prototype.forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void 🔒 ES5
배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행합니다.  
콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있습니다.  
반환값은 undefined 입니다.  

forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없습니다.  
일반 for 구문에 비해 성능이 좋지는 않습니다. IE 9 이상에서 정상 동작합니다.  

```javascript
var total = 0;
var testArray = [1, 3, 5, 7, 9];

// forEach 메소드는 원본 배열을 변경하지 않는다.
testArray.forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  total += item;
});

console.log(total);
console.log(testArray);

testArray = [1, 2, 3, 4];

// 원본 배열을 변경하려면 콜백 함수의 3번째 인자를 사용한다.
testArray.forEach(function (item, index, array) {
  array[index] = Math.pow(item, 2);
});

console.log(testArray);

// forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없다.
[1, 2, 3].forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  if (item > 1) break;
});
```

두번째 인자로 this를 전달할 수 있습니다.  

```javascript
function Counter() {
  this.sum = 0;
  this.count = 0;
}

Counter.prototype.add = function (array) {
  // entry는 array의 배열 요소의 값
  array.forEach(function (entry) {
    this.sum += entry;
    this.count++;
  }, this);
};

var counter = new Counter();
counter.add([2, 5, 9]);
console.log(counter.count);
console.log(counter.sum);
```

## 3. Array.prototype.map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] 🔒 ES5
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 반환값(결과값)으로 새로운 배열을 생성하여 반환 합니다.  
이때 원본 배열은 변경되지 않습니다. IE 9 이상에서 정상 동작합니다.  
forEach()는 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수이며 map()은 배열을 순회하며 요소 값을 다른 값으로 맵핑하기 위한 함수입니다.  

```javascript
var numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
var roots = numbers.map(function (item) {
  return Math.sqrt(item);
});

// 위 코드의 축약표현은 아래와 같다.
// var roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots);
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers);

numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
roots = numbers.map(function (item) {
  return ++item;
});

// map 메소드는 새로운 배열을 반환한다
console.log(roots);
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers);
```

## 4. Array.prototype.filter(callback: (value: T, index: number, array: Array) => any, thisArg?: any): T[] 🔒 ES5
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환 합니다.  
배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용합니다.  
이때 원본 배열은 변경되지 않습니다. IE 9 이상에서 정상 동작합니다.  

```javascript
var result = [1, 2, 3, 4, 5].filter(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result);
```

## 5. Array.prototype.reduce<U>(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U): U 🔒 ES5
배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환합니다. IE 9 이상에서 정상 동작합니다.  
```javascript
var arr = [1, 2, 3, 4, 5];

/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 순회할 배열
*/
var sum = arr.reduce(function (previousValue, currentValue, currentIndex, array) {
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});

console.log(sum);


var max = arr.reduce(function (prev, cur) {
  return prev > cur ? prev : cur;
});

console.log(max);
```

## 6. Array.prototype.some(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒 ES5
배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환 합니다. IE 9 이상에서 정상 동작합니다.

```javascript
// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
var res = [2, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res);

res = [12, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res);

// 배열 내 요소 중 특정 값이 1개 이상 존재하는지 확인
res = ['apple', 'banana', 'mango'].some(function (item) {
  return item === 'banana';
});
console.log(res);
```

## 7. Array.prototype.every(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒 ES5
배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환 합니다. IE 9 이상에서 정상 동작합니다.  

```javascript
// 배열 내 모든 요소가 10보다 큰 값인지 확인
var res = [21, 15, 89, 1, 44].every(function (item) {
  return item > 10;
});
console.log(res);

res = [21, 15, 89, 100, 44].every(function (item) {
  return item > 10;
});
console.log(res);
```

## 8. Array.prototype.find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined 🔒 ES6
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환합니다.  
콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 <b>undefined</b>를 반환 합니다.

참고로 filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.  
따라서 filter의 반환값은 언제나 배열입니다.   
하지만 find는 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환하므로 find의 결과값은 해당 요소값입니다.  

```javascript
var users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다.
var result = users.find(function (item) {
  return item.id === 2;
});

// ES6
// const result = users.find(item => item.id === 2;);

console.log(result);

// filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.
result = users.filter(function (item) {
  return item.id === 2;
});

console.log(result);
```

## 9. Array.prototype.findIndex(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): number 🔒 ES6
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환 합니다.  
콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 <b>-1</b>을 반환합니다.  

```javascript
var users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환한다.
function predicate(key, value) {
  return function (item) {
    return item[key] === value;
  };
}

// id가 2인 요소의 인덱스
var index = users.findIndex(predicate('id', 2));
console.log(index);

// name이 'Park'인 요소의 인덱스
index = users.findIndex(predicate('name', 'Park'));
console.log(index);
```