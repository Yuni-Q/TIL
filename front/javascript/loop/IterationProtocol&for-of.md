
# Iteration protocol

## 1. 이터레이션 프로토콜(Iteration protocol)
ES6에는 이터러블(iterable)과 이터레이터(iterator)를 정의한 이터레이션 프로토콜(iteration protocol)이 추가되었다.  

### 이터러블(iterable)
이터러블은 순회 가능한 자료 구조이다.  
Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현하는 것에 의해 순회 가능한 자료 구조인 이터러블이 된다.  

### 이터레이터(iterator)
이터레이터는 순회 가능한 객체이다.  
Symbol.iterator를 프로퍼티 키로 사용한 메소드는 이터레이터를 반환한다.  
이터레이터는 순회 가능한 자료 구조인 이터러블의 각 요소를 순회하기 위한 포인터로서 next 메소드를 갖는다.  
next 메소드는 value, done 프로퍼티를 갖는 객체(iterator result)를 반환하며 이 메소드를 호출하여 이터러블 객체를 순회하며 단계별로 제어할 수 있다.  

- Array : Array.prototype[Symbol.iterator]
- String : String.prototype[Symbol.iterator]
- Map : Map.prototype[Symbol.iterator]
- Set : Set.prototype[Symbol.iterator]
- DOM data structures : NodeList.prototype[Symbol.iterator] HTMLCollection.prototype[Symbol.iterator]

## 2. 커스텀 이터러블
객체는 이터러블이 아니다. 하지만 이터레이션 프로토콜을 준수하면 순회할 수 있는 이터러블 객체를 만들수 있다.  
피보나치 수열을 구현한 간단한 이터러블 객체를 만들어 보자. Symbol.iterator를 프로퍼티 키로 사용하는 메소드를 구현하면 순회 가능한 자료 구조인 이터러블이 된다.  

```javascript
const fibonacci = {
  [Symbol.iterator]() {
    let [prev, curr] = [0, 1];
    // 순회 카운터
    let step = 0;
    // 최대 순회수
    const maxStep = 10;
    return {
      // fibonacci 객체를 순회할 때마다 next 메소드가 호출된다.
      next() {
        [prev, curr] = [curr, prev + curr];
        return { value: curr, done: step++ >= maxStep };
      }
    };
  }
};

for (const num of fibonacci) {
  console.log(num);
}

// spread 연산자
const arr = [...fibonacci];
console.log(arr); // [ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]

// 디스트럭처링
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest); // 1 2 [ 3, 5, 8, 13, 21, 34, 55, 89 ]
```
Symbol.iterator를 프로퍼티 키로 사용한 메소드는 next 메소드를 갖는 객체를 반환하여야 한다.  
그리고 next 메소드는 done과 value 프로퍼티를 가지는 객체(iterator result)를 반환한다.  
for-of는 done 프로퍼티가 true가 될 때까지 반복하며 done 프로퍼티가 true가 되면 반복을 중지한다.  

이터러블 객체는 for–of 루프뿐만 아니라 디스트럭쳐링, spread 연산자, Map과 Set의 생성자에도 사용된다.  

---
참조 : [이터레이션 프로토콜(iteration protocol)과 for-of 루프](https://poiemaweb.com/es6-iteration-for-of)
