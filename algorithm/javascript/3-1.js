// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  var startTime = new Date().getTime();
  // write your code in JavaScript (Node.js 8.9.4)
  if((A <= 65536 && B >= 65536) || (A <= 43046721 && B >= 43046721) ){
      return 4;
  }
  let c = Math.sqrt(A);
  let d = Math.ceil(c);
  if ((d ** 2) > B ) {
      return 0;
  }
  let a = 1;
  let max = 1;
  while(true){
      a = 1;
      if ((d ** 2) > B ) {
          var endTime = new Date().getTime();

          console.log(endTime - startTime);
          return max;
      } else {
          
          let h = d;
          while(true){
              let c = Math.sqrt(h);
              let x = Math.ceil(c);
              if ((x**2) === h){
                  a += 1;
                  h = x;
                  if(a >= max){
                      max = a;
                  }
                  if(a >=3 ){
                      var endTime = new Date().getTime();
                      console.log(endTime - startTime);
                      return 3
                  }
                  
              } else {
                  break;
              }
          }
      d += 1;
      }
      
  }
}