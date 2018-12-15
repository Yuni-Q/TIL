// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const a = S.split(" ");
  let b = 0;
  let c = a[0];
  const d = [];
  for(let i=1; i < a.length; i +=1 ){
      if(a[i].length === K){
          d.push(c);
          c = "";
          d.push(a[i]);
          continue;
      }
      if(a[i].length > K){
          return -1;
      }
       if((K-1) >= (c.length + a[i].length)){
           c = `${a[i-1]} ${a[i]}`;
       } else {
           d.push(c);
           c = a[i];
       }
  }
  if(c){
    d.push(c);
  }
  console.log(d,K);
  return d.length
}

console.log(solution("SMS is good message", 7));