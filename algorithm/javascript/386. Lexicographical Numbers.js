// Given an integer n, return 1 - n in lexicographical order.

// For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    
  if(n < 1){
      return [];
  }
  
  let hash = {};
  let arr = [];
  
  for(let i = 1; i < 10; i++){
      if(i <= n){
          arr.push(i);
          util(i);
      }
  }
  
  return arr;
  
  function util(p){
      for(let i = 0; i < 10; i++){
          let curr = p * 10 + i;

          if(curr > n){
              return;
          }
          else {
              arr.push(curr);
          }
          
          util(curr);
      }
  }
  
};

// 안 좋은 방법
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    
  if(n < 1){
      return [];
  }
  const result = [];
  for(let i = 1 ; i <= n ; i+=1) {
      result.push(i)
  }  
  return result.sort();
};

// 다른 방법
/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = n => {
	const result = [];
  if (n < 1) {
  	return result;
  }
  dfs(result, 1, 10, n);
  return result;
}

const dfs = (result, start, end, max) => {
	for (let i = start; i < end; i++) {
        if (i > max) {
            return;
        }
        result.push(i);
        let next = i * 10;
        if (next <= max) {
            dfs(result, next, next + 10, max);
        }
    }
};