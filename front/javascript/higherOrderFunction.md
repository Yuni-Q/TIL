
# Higher order function
고차 함수(Higher order function)는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말합니다.  
고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환 합니다.  
자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있습니다.  

고차 함수는 상태 변경이나 가변(mutable) 데이터를 피하고 불변성(Immutability)을 지향하는 함수형 프로그래밍에 기반을 두고 있습니다.  
함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과(Side effect)를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 한 방법이라고 할 수 있습니다.  

## 1. Array.prototype.sort(compareFn?: (a: T, b: T) => number): this ✏️ ES1  
배열의 요소를 적절하게 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환 합니다.  
기본 정렬 순서는 문자열 Unicode 코드 포인트 순서에 따른다. 배열의 요소가 숫자 타입이라 할지라도 일시적으로 문자열로 변환되어 정렬 됩니다.  

## 2. Array.prototype.forEach(callback: (value: T, index: number, array: T[]) => void, thisArg?: any): void 🔒 ES5  
배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행 합니다.  
콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있습니다.  
반환값은 undefined 입니다.  
forEach 메소드는 for 문과는 달리 break 문을 사용할 수 없습니다.(some 함수는 사용 할 수 있습니다.)  
일반 for 구문에 비해 성능이 좋지는 않습니다.(IE 9 이상에서 정상 동작 합니다.)  

## 3. Array.prototype.map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] 🔒 ES5  
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 반환값(결과값)으로 새로운 배열을 생성하여 반환 합니다.  
이때 원본 배열은 변경되지 않습니다.(IE 9 이상에서 정상 동작한다.)  
> ES6의 Arrow function를 사용하면 this를 생략하여도 동일한 동작을 합니다.  

## 4. Array.prototype.filter(callback: (value: T, index: number, array: Array) => any, thisArg?: any): T[] 🔒 ES5
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환 합니다.  
배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용 합니다.  
이때 원본 배열은 변경되지 않는다.(IE 9 이상에서 정상 동작한다.)  

## 5. Array.prototype.reduce<U>(callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U): U 🔒 ES5
배열을 순회하며 각 요소에 대하여 이전의 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환 합니다.(IE 9 이상에서 정상 동작한다.)  
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

console.log(sum); // 15: 1~5까지의 합
/*
1: 1+2=3
2: 3+3=6
3: 6+4=10
4: 10+5=15
15
*/

var max = arr.reduce(function (prev, cur) {
  return prev > cur ? prev : cur;
});

console.log(max); // 5: 최대값
```

## 6. Array.prototype.some(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒 ES5
배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환 합니다.(IE 9 이상에서 정상 동작한다.)  
콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있습니다.  
ex) // 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인  

## 7. Array.prototype.every(callback: (value: T, index: number, array: Array) => boolean, thisArg?: any): boolean 🔒 ES5
배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환 합니다.(IE 9 이상에서 정상 동작한다.)  
콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있습니다.  

## 8. Array.prototype.find(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): T | undefined 🔒 ES6
ES6에서 새롭게 도입된 메소드로 Internet Explorer에서는 지원하지 않습니다.  
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환 합니다. 콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 undefined를 반환 합니다.  
콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있습니다.
> filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환 합니다.  
> 따라서 filter의 반환값은 언제나 배열입니다.  
> 하지만 find는 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환하므로 find의 결과값은 해당 요소값 입니다.  

## 9. Array.prototype.findIndex(predicate: (value: T, index: number, obj: T[]) => boolean, thisArg?: any): number 🔒 ES6
ES6에서 새롭게 도입된 메소드로 Internet Explorer에서는 지원하지 않습니다.  
배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환 합니다.  
콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 -1을 반환 합니다.  
콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을 수 있습니다.  
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
console.log(index); // 1

// name이 'Park'인 요소의 인덱스
index = users.findIndex(predicate('name', 'Park'));
console.log(index); // 3
```







