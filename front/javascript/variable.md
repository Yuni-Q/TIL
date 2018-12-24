
# JavaScript 변수
ES5에서 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이었습니다.  
이는 다른 [C-family](https://en.wikipedia.org/wiki/List_of_C-family_programming_languages) 언어와는 차별되는 특징(설계상 오류)으로 주의를 기울이지 않으면 심각한 문제를 일으킵니다.  

var : functionScoped, 변수 재할당, 재선언 모두 가능합니다.
1. 함수 레벨 스코프(Function-level scope)
- 전역 변수의 남발
- for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조할 수 있다.

2. var 키워드 생략 허용
- 의도하지 않은 변수의 전역화

3. 중복 선언 허용
- 의도하지 않은 변수값 변경

4. 변수 호이스팅
- 변수를 선언하기 전에 참조가 가능하다.

> 대부분의 문제는 전역 변수로 인해 발생한다.   
> 전역 변수는 간단한 애플리케이션의 경우, 사용이 편리하다는 장점이 있지만 불가피한 상황을 제외하고 사용을 억제해야 한다.  
> 전역 변수는 유효 범위(scope)가 넓어서 어디에서 어떻게 사용될 것인지 파악하기 힘들며, 비순수 함수(Impure function)에 의해 의도하지 않게 변경될 수도 있어서 복잡성을 증가시키는 원인이 된다.  

따라서 변수의 유효 범위(scope)는 좁을수록 좋다.  

## let const
[es2015(ES6)](https://www.zerocho.com/category/ECMAScript/post/5756d488e9c105aaeb550ea5)에서 let과 const 가 생성 되었습니다.<br>
let : blockScoped,  변수에 재할당만 가능 합니다 ( 재선언 불가능 )<br>
const : blockScoped, 변수 재선언, 재할당 모두 불가능 합니다.<br>

let을 변수 const를 상수로 var는 사용하지 않는게 좋을듯 하다...

```javascript
{
  a = 3;
  console.log(a); // 3
  var a = 2;
  console.log(a); // 2
  var a = 4;
  console.log(a); // 4
}
console.log(a); // 4
```
> var는 모든 사항에 문제 없습니다 ( 호이스팅, 재선언, 함수 스코프 )

```javascript
{
  a = 3; // a is not defined
  let a = 2;
}
```
> let은 호이스팅이 되지 않습니다.

```javascript
{
  let a = 2;
  console.log(a); // 2
}
console.log(a); // a is not defined
```
> let은 블록 스코프 입니다.

```javascript
{
  let a = 2;
  console.log(a); // 2
  a = 3;
  console.log(a); // 3
  let a = 4; // Identifier 'a' has already been declared
  console.log(a); 
}
```
> let은 재선언 되지 않습니다.

```javascript
{
  const a = 2;
  console.log(a); // 2
  a = 3;
  console.log(a); // Assignment to constant variable.
}
```
> const는 let의 모든 특징과 더불어 재할당도 되지 않습니다.  

## 호이스팅
자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅합니다.  
호이스팅(Hoisting)이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말합니다.  

하지만 var 키워드로 선언된 변수와는 달리 let 키워드로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생합니다.  
이는 let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문입니다.  

1. 선언 단계(Declaration phase)  
변수를 실행 컨텍스트의 변수 객체(Variable Object)에 등록한다. 이 변수 객체는 스코프가 참조하는 대상이 된다.  

2. 초기화 단계(Initialization phase)  
변수 객체(Variable Object)에 등록된 변수를 위한 공간을 메모리에 확보한다. 이 단계에서 변수는 undefined로 초기화된다.  

3. 할당 단계(Assignment phase)   
undefined로 초기화된 변수에 실제 값을 할당한다.  

var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어집니다.  
let 키워드로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행됩니다.  

결국 ES6에서는 호이스팅이 발생하지 않는 것과 차이가 없어 보입니다. 하지만 그렇지 않습니다.  
```javascript
let foo = 1; // 전역 변수

{
  console.log(foo); // ReferenceError: foo is not defined
  let foo = 2; // 지역 변수
}
```
> ES6의 let으로 선언된 변수는 블록 레벨 스코프를 가지므로 코드 블록 내에서 선언된 변수 foo는 지역 변수입니다.  
> 따라서 지역 변수 foo도 해당 스코프에서 호이스팅되고 코드 블록의 선두부터 초기화가 이루어지는 지점까지 일시적 사각지대(TDZ)에 빠집니다.  
> 따라서 전역 변수 foo의 값이 출력되지 않고 참조 에러(ReferenceError)가 발생합니다.  

```javascript
// 함수 선언
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// 함수 표현식
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar는 함수가 아닙니다
var bar = function() {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]
```
> 함수 선언은 바디를 호이스팅되는 반면 변수 선언 형태로 작성된 함수 표현식은 변수 선언만 호이스팅됩니다.  

## 클로저
블록 레벨 스코프를 지원하는 let은 var보다 직관적입니다 !!  

```javascript
var funcs = [];

// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
for (var i = 0; i < 3; i++) {
  funcs.push(function () { console.log(i); });
}

// 배열에서 함수를 꺼내어 호출한다.
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
```
> 위 코드의 실행 결과로 0, 1, 2를 기대할 수도 있지만 결과는 3이 세 번 출력된다.  
> 그 이유는 for 루프의 var i가 전역 변수이기 때문이다. 0, 1, 2를 출력하려면 아래와 같은 코드가 필요하다.  

```javascript
var funcs = [];

// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
for (var i = 0; i < 3; i++) {
  (function (index) { // index는 자유변수다.
    funcs.push(function () { console.log(index); });
  }(i));
}

// 배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
```
> 자바스크립트의 함수 레벨 스코프로 인하여 for 루프의 초기화 식에 사용된 변수가 전역 스코프를 갖게 되어 발생하는 문제를 회피하기 위해 클로저를 활용한 방법이다.  

```javascript
var funcs = [];

// 함수의 배열을 생성하는 for 루프의 i는 for 루프의 코드 블록에서만 유효한 지역 변수이면서 자유 변수이다.
for (let i = 0; i < 3; i++) {
  funcs.push(function () { console.log(i); });
}

// 배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++) {
  console.dir(funcs[j]);
  funcs[j]();
}
```
> for 루프의 let i는 for loop에서만 유효한 지역 변수이다. 또한, i는 자유 변수로서 for 루프의 생명주기가 종료되어도 변수 i를 참조하는 함수가 존재하는 한 계속 유지된다.  

## 전역 객체와 let
전역 객체(Global Object)는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window 객체, Server-side(Node.js)에서는 global 객체를 의미한다.   
var 키워드로 선언된 변수를 전역 변수로 사용하면 전역 객체의 프로퍼티가 된다.   
let 키워드로 선언된 변수를 전역 변수로 사용하는 경우, let 전역 변수는 전역 객체의 프로퍼티가 아니다.  
즉, window.foo와 같이 접근할 수 없다.  
let 전역 변수는 보이지 않는 개념적인 블록 내에 존재하게 된다.  

## const

### 선언과 초기화
let은 재할당이 자유로우나 const는 재할당이 금지된다.  
주의할 점은 const는 반드시 선언과 동시에 할당이 이루어져야 한다는 것이다. 그렇지 않으면 다음처럼 문법 에러(SyntaxError)가 발생한다.  

### const와 객체
const는 재할당이 금지된다.   
이는 const 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못한다는 것을 의미한다.  
하지만 이때 객체의 프로퍼티는 보호되지 않는다.  
다시 말하자면 재할당은 불가능하지만 할당된 <b>객체의 내용(프로퍼티의 추가, 삭제, 프로퍼티 값의 변경)은 변경할 수 있다.</b>   
객체의 내용이 변경되더라도 객체 타입 변수에 할당된 주소값은 변경되지 않는다.  
따라서 <b>객체 타입 변수 선언에는 const를 사용하는 것이 좋다.</b>  
만약에 명시적으로 객체 타입 변수의 주소값을 변경(재할당)하여야 한다면 let을 사용한다.  

## var vs. let vs. const
- ES6를 사용한다면 var 키워드는 사용하지 않는다.
- 재할당이 필요한 변수에는 let을 사용한다.
- 변경이 발생하지 않는(재할당이 필요 없는) 원시 타입과 객체 타입에는 const를 사용한다.

---

# null, undefined, 선언되지 않은 변수 의 차이점은 무엇입니까? 당신은 어떻게 이 상태들에 대한 점검을 할 것입니까?

## 선언되지 않은 변수
선언되지 않은 변수 변수는 이전에 var, let, const 를 사용하여 생성되지 않은 식별자에 값을 할당할 때 생성됩니다.  
선언되지 않은 변수 는 현재 범위 외부에서 전역으로 정의됩니다.  
strict 모드에서는 선언되지 않은 변수 에 할당하려고 할 때 ReferenceError 가 throw 됩니다.  
선언되지 않은 변수 는 전역 변수처럼 좋지 않은 것입니다.  
그것들은 모두 피하세요!  
이들을 검사하기 위해 사용할 때 try / catch 블록에 감싸십시오.  

## undefined
undefined 변수는 선언되었지만 값이 할당되지 않은 변수입니다.  
이것은 undefined 타입입니다.  
함수가 실행 결과에 따라 값을 반환하지 않으면 변수에 할당되며, 변수가 undefined 값을 갖습니다.  
이것을 검사하기 위해, 엄격한 (===) 연산자 또는 typeof 에 undefined 문자열을 사용하여 비교하십시오.  
확인을 위해 추상 평등 연산자(==)를 사용해서는 안되며, 이는 값이 null 이면 true 를 반환합니다.  

```javascript
var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true

console.log(foo == null); // true. 옳지않습니다. 확인하는 데 사용하지 마세요.

function bar() {}
var baz = bar();
console.log(baz); // undefined
```

## null 
null 인 변수는 null 값에 명시적으로 할당될 것입니다.  
그것은 값을 나타내지 않으며 명시적으로 할당된다는 점에서 undefined와 다릅니다.   
null을 체크하기 위해서 단순히 완전 항등 연산자(===)를 사용하여 비교하면 됩니다.  
위와 같이, 추상 평등 연산자 (==)를 사용해서는 안되며, 값이 undefined이면 true를 반환합니다.  

```javascript
var foo = null;
console.log(foo === null); // true

console.log(foo == undefined); // true. 옳지않습니다. 확인하는 데 사용하지 마세요.
```
개인적 습관으로, 저는 변수를 선언하지 않거나 할당하지 않은 상태로 두지 않습니다.   
아직 사용하지 않으려는 경우, 선언한 후에 명시적으로 null 을 할당할 것입니다.  

---

# 호스트 객체와 내장 객체의 차이점은 무엇입니까?
내장 객체는 ECMAScript 사양에 정의된 JavaScript 언어의 일부인 객체입니다. (예: String, Math, RegExp, Object, Function 등)  

호스트 객체는 window, XMLHTTPRequest 등과 같이 런타임 환경 (브라우저 또는 노드)에 의해 제공됩니다.  

---

# Person(){}, var person = Person(), var person = new Person() 의 차이점은 무엇입니까?

이 질문은 굉장해 애매합니다. 질문의 의도에 대한 저의 최선의 추측은 JavaScript의 생성자에 대해 묻는 것입니다.  
엄밀히 말하면, function Person(){}은 정상적인 함수 선언일 뿐입니다.  
이 컨벤션은 생성자로 사용하기 위해 함수에 PascalCase 를 사용합니다.  

var person = Person()은 생성자가 아니며 Person을 함수로 호출합니다.  
함수를 생성자로 사용하려는 경우에 이렇게 호출하는 것이 일반적인 실수입니다.  
일반적으로 생성자는 아무것도 반환하지 않으므로 일반 함수처럼 생성자를 호출하면 undefined가 반환되고 지정된 변수에 할당됩니다.  

var person = new Person()은 Person.prototype을 상속받은 new 연산자를 사용하여 Person 객체의 인스턴스를 생성합니다.  
또 다른 방법은 Object.create를 사용하는 것입니다: Object.create(Person.prototype).  
```javascript
function Person(name) {
  this.name = name;
}

var person = Person('John');
console.log(person); // undefined
console.log(person.name); // Uncaught TypeError: 정의되지 않은 'name' 프로퍼티를 읽을 수 없습니다

var person = new Person('John');
console.log(person); // Person { name: "John" }
console.log(person.name); // "john"
```



---
참조 : [let, const와 블록 레벨 스코프](https://poiemaweb.com/es6-block-scope)
참조 : [JS 질문](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Korean/questions/javascript-questions.md)
