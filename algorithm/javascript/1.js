// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
[[1,2,3,1],[5,2,3,1],[4,1,2,1],[5,3,2,6]]

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const result = {};
  for(let i = 0 ; i < A.length; i +=1 ){
      for(let j = 0 ; j < A[i].length; j +=1){
        //   console.log(result[A[i][j]]);
          if(!result[A[i][j]]) {
              result[A[i][j]] = 1;
          } else {
              result[A[i][j]] += 1;
          }
      }
  }
//   let j ;
  return Object.entries(result).reduce((acc, [key, value]) => (
      (value < 2 && acc < key) ? key : acc
  ), 0)
//   Object.keys(result).forEach(key=> {
//     if(result[key] === 1){
//         j = key;
//     }
//   });
//   console.log(result)
//   return j;
}

console.log(solution([[1,2,3,1],[5,2,3,1],[4,1,2,1],[5,3,2,6]]));