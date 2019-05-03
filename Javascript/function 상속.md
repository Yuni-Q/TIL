# function 상속
```javascript
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}
Person.prototype.sum = function() {
  return this.first + this.second
}

function PersonPlus(name, first, second, thrid) {
  Person.call(this, first, second);
  this.thrid = thrid
}

// __proto__는 공식 지원이 아니기 때문에 Object.create를 쓰는게 좋다
// PersonPlus.prototype.__proto__ = Person.prototype;

PersonPlus.prototype = Object.create(Person.prototype)
// Object.create를 사용 할 경우 constructor를 재설정 해주어야 한다
PersonPlus.prototype.constructor = PersonPlus;
// Object.create를 사용 할 경우 반드시 Object.create 뒤에 사용해야 한다
// __proto__를 사용할 경우는 앞에 사용해야 한다
PersonPlus.prototype.avg = function() {
  return (this.first + this.second + this.thrid) / 3
}
```