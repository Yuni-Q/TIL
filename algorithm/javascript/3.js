// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
  // write your code in JavaScript (Node.js 8.9.4)
  const a = {};
  a[T.x] = true;
  let b = 1;
  let e = 0;
  if (T.l) {
    c = temp(T.l, a, b);
  }
  if (T.r) {
    d = temp(T.r, a, b);
  }

  function temp(T, a, b) {
    // write your code in JavaScript (Node.js 8.9.4)
    let c = 0;
    let d = 0;
    if (a[T.x]) {
      return b = -9999;
    } else {
      a[T.x] = true;
      b += 1;
      if (T.l) {
        c = temp(T.l, a, b);
      } else {
        c = b;
      }
      if (T.r) {
        d = temp(T.r, a, b);
      } else {
        d = b;
      }
      if (c > e) {
        e = c
      }
      if (d > e) {
        e = d
      }
    }

  }
  return e

}
