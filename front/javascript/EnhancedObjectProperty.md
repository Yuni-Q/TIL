
# Enhanced Object property
ES6에서는 객체 리터럴 프로퍼티 기능을 확장하여 더욱 간편하고 동적인 객체 생성 기능을 제공한다.  

## 1. 프로퍼티 축약 표현

## 2. 프로퍼티 키 동적 생성

## 3. 메소드 축약 표현

## 4. __proto__ 프로퍼티에 의한 상속
```javascript
// ES5
var parent = {
  name: 'parent',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

// 프로토타입 패턴 상속
var child = Object.create(parent);
child.name = 'child';

parent.sayHi(); // Hi! parent
child.sayHi();  // Hi! child

// ES6
const parent = {
  name: 'parent',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

const child = {
  // child 객체의 프로토타입 객체에 parent 객체를 바인딩하여 상속을 구현한다.
  __proto__: parent,
  name: 'child'
};

parent.sayHi(); // Hi! parent
child.sayHi();  // Hi! child
```

---
참조 : [객체 리터럴 프로퍼티 기능 확장](https://poiemaweb.com/es6-enhanced-object-property)
