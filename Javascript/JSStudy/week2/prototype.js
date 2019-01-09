function Animal(kind) {
  this.kind = kind;
}

var animal = new Animal();

console.log(animal.__proto__ === Animal.prototype);

console.log(Animal.__proto__ === Function.prototype);

var obj = {a: 1};

console.log(obj.__proto__ === Object.prototype);
