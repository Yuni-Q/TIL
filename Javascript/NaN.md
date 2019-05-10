# NaN
- IEEE 부동 소수점 표준에 따른 역설적인 이름인 'not a number'
- 자바스크립트는 IEEE 부동 소수점 표준에 정의된 이상한 요구사항을 따라 NaN 자신을 동등하지 않다고 처리하기 때문이다. 따라서 어떤 값이 NaN인지 테스트하기 위한 다음 식은 전혀 바르게 작동하지 않는다.
```javascript
var x = NaN;
x === NaN; // false
```
- 게다가, 표준 isNaN 라이브러리 함수는 스스로 암묵적인 형변환, 즉 값을 테스트하기 전에 인자를 숫자로 바꾸기 때문에 신뢰할 만하지 않다. 이미 값이 숫자인지 알고 있을 경우에는 isNaN으로 NaN을 테스트 할 수 있다.
```javascript
isNaN(NaN); // true
```
- 하지만 NaN으로 강제 형변환할 수 있는 다른 값들은, 실제로 NaN이 아니라면 isNaN으로 구분할 수 없다.
```javascript
isNaN("foo"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN({ valueOf: "foo" }); // true
```
- 다소 직관적이지 않지만, NaN을 테스트하기 위한 간결하고 신뢰할 만한 코딩 관례가 있다.
- NaN은 자기 자신과 동일하지 않은 유일한 값이다. 따라서 값이 NaN인지 아닌지는 자기 자신과의 동일함을 확인하여 테스트 할 수 있다.
```javascript
var a = NaN;
a !== a ; // true
var b = "foo";
b !== b // false
var c = undefined;
c !== c // false
var d =  {};
d !== d // false
var e = { valueOf: "foo" };
e !== e // false
```
- 이 패턴을 다음과 같이 명백한 이름의 유틸리티 함수로 추상화할 수도 있다.
```javascript
function isReallyNaN(x) {
  return x !== x;
}
```
- 하지만 자기 자신의 값과 동일하지 않음을 테스트하는 방법은 너무 간다하기 때문에, 보통은 이런 함수를 만들지 않는다.