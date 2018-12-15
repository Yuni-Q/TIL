// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 **/
var reverse = function(x) {
  if (x === 0) return 0;
  let a = 1;
  if(x < 0) {
      a = -1;
      x =  x * -1;
  }
  let c = JSON.stringify(x);
  // console.log('c1',c)
  let b = c.split("").reverse().join("");
  while(true){
      if(b[0] == '0') {
          b = b.slice(1, b.length)
      } else {
          break;
      }
  }
  console.log(b)
  c = JSON.parse(b);
  // console.log('c2',c)
  c = a * c;
  
  if(c > (2 **31) -1){
      return 0
  } else if (c < -(2 **31)) {
      return 0;    
  } else {
      return c;
  }
};
