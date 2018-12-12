
function a(a, b) {
  console.log('a', a);
  if (b) {
    console.log('b', b);
  }
}

a(1, 2);
// a 1
// b 2

a(1);
// a 1

a();
// a undefined
