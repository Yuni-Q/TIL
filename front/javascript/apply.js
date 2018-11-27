
function Person(name, age) {
  this.name = name
  this.age = age
};

const person = {}

Person('Kim')

console.log(name);

Person.apply(person, ['Lee', 29]);

console.log(person); // { name: 'Lee', age: 29 }