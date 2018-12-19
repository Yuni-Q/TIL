// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let a = 0;
  let i = 0;
  while(true){
      a += 1;
      if(A[i] === -1){
          return a;
      }
      i = A[i];
  }
  // write your code in JavaScript (Node.js 8.9.4)
}