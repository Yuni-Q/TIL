# ECMA6 이전의 class 가 없을 시절의 JS에서 클래스를 구현하는 방법, 상속하는 방법 정리

## prototype을 사용하여 class를 구현하는 방법입니다.

```javascript
function Animal() {
  this.name = "없어요";
}
Animal.prototype.getName = function() {
  console.log(this.name);
};
```

## 자바스크립트는 상속 또한 존재하지 않습니다. 하지만, 역시 마찬가지로 prototype을 사용하여 상속을 구현할 수 있습니다.

```javascript
function Animal() {
  this.name = "없어요";
}
Animal.prototype.getName = function() {
  console.log(this.name);
};

function Dog() {}
Dog.prototype = new Animal();

var myDog = new Dog();
console.dir(myDog);
```

- 일반적으로 클래스를 만들면 자동으로 prototype의 constructor라는 프로퍼티가 만들어집니다.
- 이 프로퍼티에는 해당 클래스의 생성자 정보가 기본값으로 담기게 됩니다. 달리 말하면 constructor 프로퍼티를 이용해 사용하는 객체가 어떤 클래스의 객체인지 알아낼 수 있습니다.
- 그렇다면, myDog.constructor는 무엇을 가르키고 있을까요? 위에서 말한 것이라면 myDog.constructor는 Dog 를 가르켜야 합니다. 하지만 실제 결과는 myDog.Constructor 결과는 Animal 을 가르키고 있습니다. 왜 일까요?

[자바스크립트] 프로토타입(Prototype)에서 잠깐 설명 했던, 프로토타입 체인 때문입니다. dog 객체에 constructor이라는 인스턴스가 없이 때문에, 상위의 constructor을 찾아, Animal을 가르키게 된 것입니다.

```javascript
function Animal() {
  this.name = "없어요";
}
Animal.prototype.getName = function() {
  console.log(this.name);
};

function Dog() {}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

var myDog = new Dog();
console.dir(myDog);
```

- myDog.constructor가 Dog를 가르키기 위해, 코드 3에서와 같이 Dog.prototype.constructor = Dog 가 추가되어야 합니다.

### 부모 클래스의 생성자 호출

```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.getName = function() {
  console.log(this.name);
};

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

var myDog = new Dog("진순이");
console.dir(myDog);
myDog.getName();
```

- call 매소드로 Dog의 name에 "진순이"가 저장되어 있는 것을 확인 할 수 있습니다. 또한 myDog.getName()의 결과가 "진순이"로 부모의 getName 매소드가 동작하고 있는 것을 확인 할 수 있습니다. (부모 객체의 getName이 호출 되는 것도 프로토타입 체인의 결과입니다)

---

출처: https://beomy.tistory.com/3 [beomy]
