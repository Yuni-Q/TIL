
const person = {
  name: 'Kim',
  sayName: () => {
    console.log(`My name is ${this.name}.`)
  }
}

person.sayName() // My name is Kim.