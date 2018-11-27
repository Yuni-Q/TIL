
function outer() {
  let count = 0
  console.log(count);

  function inner() {
    count += 1
    console.log('count: ', count)
  }

  return inner
}

const count = 10

const foo = outer() // 0
const bar = outer() // 0

foo() // 1
foo() // 2
foo() // 3

bar() // 1