
# this
자바스크립트의 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에, arguments 객체와 this를 암묵적으로 전달 받습니다.  
Java에서의 this는 인스턴스 자신(self)을 가리키는 참조변수 입니다.  

- 함수 호출 방식과 this 바인딩
자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정 됩니다.  
함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정됩니다.  
> 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프(Lexical scope)는 함수를 선언할 때 결정 됩니다. this 바인딩과 혼동하지 않도록 주의하기 바랍니다.  

- 함수의 호출 방식
1. 함수 호출
1. 메소드 호출
1. 생성자 함수 호출
1. apply/call/bind 호출
```javascript
var foo = function () {
  console.dir(this);
};

// 1. 함수 호출
foo(); // window
// window.foo();

// 2. 메소드 호출
var obj = { foo: foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
var instance = new foo(); // instance

// 4. apply/call/bind 호출
var bar = { name: 'bar' };
foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar
```

## 1. 함수 호출
전역객체(Global Object)는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미 합니다.  
전역객체는 전역 스코프(Global Scope)를 갖는 전역변수(Global variable)를 프로퍼티로 소유 합니다.  
글로벌 영역에 선언한 함수는 전역객체의 프로퍼티로 접근할 수 있는 전역 변수의 메소드 입니다.  
기본적으로 this는 전역객체(Global object)에 바인딩 됩니다. 전역함수는 물론이고 심지어 내부함수의 경우도 this는 외부함수가 아닌 전역객체에 바인딩 됩니다.  
> 또한 메소드의 내부함수일 경우에도 this는 전역객체에 바인딩 됩니다.  
> 콜백함수의 경우에도 this는 전역객체에 바인딩 됩니다.  
```javascript
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1
    }
    bar();
  }
};

obj.foo();
```
내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 관게없이 this는 전역객체를 바인딩 합니다.  
더글라스 크락포드는 “이것은 설계 단계의 결함으로 메소드가 내부함수를 사용하여 자신의 작업을 돕게 할 수 없다는 것을 의미한다” 라고 말합니다.  

### 내부함수의 this가 전역객체를 참조하는 것을 회피방법
```javascript
var value = 1;

var obj = {
  value: 100,
  foo: function() {
    var that = this;  // Workaround : this === obj

    console.log("foo's this: ",  this);  // obj
    console.log("foo's this.value: ",  this.value); // 100
    function bar() {
      console.log("bar's this: ",  this); // window
      console.log("bar's this.value: ", this.value); // 1

      console.log("bar's that: ",  that); // obj
      console.log("bar's that.value: ", that.value); // 100
    }
    bar();
  }
};

obj.foo();
```
위 방법 이외에도 자바스크립트는 this를 명시적으로 바인딩할 수 있는 apply, call, bind 메소드를 제공 합니다.  

## 2. 메소드 호출
함수가 객체의 프로퍼티 값이면 메소드로서 호출 됩니다.  
이때 메소드 내부의 this는 해당 메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체에 바인딩 됩니다.  
프로토타입 객체도 메소드를 가질 수 있습니다. 프로토타입 객체 메소드 내부에서 사용된 this도 일반 메소드 방식과 마찬가지로 해당 메소드를 호출한 객체에 바인딩 됩니다.  


## 3. 생성자 함수 호출
자바스크립트의 생성자 함수는 말 그대로 객체를 생성하는 역할을 합니다.  
하지만 자바와 같은 객체지향 언어의 생성자 함수와는 다르게 그 형식이 정해져 있는 것이 아니라 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.  
> 이는 반대로 생각하면 생성자 함수가 아닌 일반 함수에 new 연산자를 붙여 호출하면 생성자 함수처럼 동작할 수 있습니다.  
> 따라서 일반적으로 생성자 함수명은 첫문자를 대문자로 기술하여 혼란을 방지하려는 노력을 한다.  
new 연산자와 함께 생성자 함수를 호출하면 this 바인딩이 메소드나 함수 호출 때와는 다르게 동작합니다.  
```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

var me = new Person('Lee');
console.log(me); // Person&nbsp;{name: "Lee"}

// new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
var you = Person('Kim');
console.log(you); // undefined
```

### 3.1 생성자 함수 동작 방식
new 연산자와 함께 생성자 함수를 호출하면 다음과 같은 수순으로 동작합니다.  
1. 빈 객체 생성 및 this 바인딩  
생성자 함수의 코드가 실행되기 전 빈 객체가 생성 됩니다. 이 빈 객체가 생성자 함수가 새로 생성하는 객체 입니다.  
이후 생성자 함수 내에서 사용되는 this는 이 빈 객체를 가리 킵니다. 그리고 생성된 빈 객체는 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정합니다.  

2. this를 통한 프로퍼티 생성  
생성된 빈 객체에 this를 사용하여 동적으로 프로퍼티나 메소드를 생성할 수 있습니다.  
this는 새로 생성된 객체를 가리키므로 this를 통해 생성한 프로퍼티와 메소드는 새로 생성된 객체에 추가됩니다.  

3. 생성된 객체 반환  
반환문이 없는 경우, this에 바인딩된 새로 생성한 객체가 반환됩니다. 명시적으로 this를 반환하여도 결과는 같습니다.  
반환문이 this가 아닌 다른 객체를 명시적으로 반환하는 경우, this가 아닌 해당 객체가 반환됩니다.  
이때 this를 반환하지 않은 함수는 생성자 함수로서의 역할을 수행하지 못합니다.  
따라서 생성자 함수는 반환문을 명시적으로 사용하지 않습니다.

### 3.2 객체 리터럴 방식과 생성자 함수 방식의 차이
객체 리터럴 방식과 생성자 함수 방식의 차이는 프로토타입 객체([[Prototype]])에 있습니다.  
객체 리터럴 방식의 경우, 생성된 객체의 프로토타입 객체는 Object.prototype 입니다.  
생성자 함수 방식의 경우, 생성된 객체의 프로토타입 객체는 Person.prototype 입니다.  

### 3.3 생성자 함수에 new 연산자를 붙이지 않고 호출할 경우
일반함수와 생성자 함수에 특별한 형식적 차이는 없으며 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작 합니다.  
일반 함수를 호출하면 this는 전역객체에 바인딩되지만 new 연산자와 함께 생성자 함수를 호출하면 this는 생성자 함수가 암묵적으로 생성한 빈 객체에 바인딩 됩니다.  

## 4. apply/call/bind 호출
this에 바인딩될 객체는 함수 호출 패턴에 의해 결정 됩니다.  
이는 자바스크립트 엔진이 수행하는 것입니다.  
이러한 자바스크립트 엔진의 암묵적 this 바인딩 이외에 this를 특정 객체에 명시적으로 바인딩하는 방법도 제공 됩니다.  
이것을 가능하게 하는 것이 Function.prototype.apply, Function.prototype.call 메소드 입니다.  
> 이 메소드들은 모든 함수 객체의 프로토타입 객체인 Function.prototype 객체의 메소드입니다.  

---

this가 JavaScript 에서 어떻게 작동하는지 설명하세요.
this는 간단하게 설명하기 어렵습니다.   
JavaScript 에서 가장 혼란스러운 개념 중 하나입니다.  
대략 설명하면 this의 값은 함수가 호출되는 방식에 따라 달라집니다.  
온라인에 많은 설명이 있는데 [Arnav Aggrawal](https://medium.com/@arnav_aggarwal)의 설명이 가장 명확했습니다.  

함수를 호출할 때 new 키워드를 사용하는 경우 함수 내부에 있는 this는 완전히 새로운 객체입니다.  
apply, call, bind가 함수의 호출 / 작성에 사용되는 경우 함수 내의 this는 인수로 전달된 객체입니다.  
obj.method()와 같이 함수를 메서드로 호출하는 경우 this는 함수가 프로퍼티인 객체입니다.  
함수가 자유함수로 호출되는 경우 즉 위의 조건 없이 호출되는 경우 this는 전역 객체입니다.  
브라우저에서는 window 객체입니다.  
엄격 모드('use strict') 일 경우 this는 전역 객체 대신 undefined가 됩니다.  
위의 규칙 중 다수가 적용되면 더 높은 규칙이 승리하고 this값을 설정합니다.  
함수가 ES2015 화살표 함수인 경우 위의 모든 규칙을 무시하고 생성된 시점에서 주변 스코프의 this값을 받습니다.  

---
참조 : [함수 호출 방식에 의해 결정되는 this](https://poiemaweb.com/js-this)  
참조 : [JS 질문](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Korean/questions/javascript-questions.md)