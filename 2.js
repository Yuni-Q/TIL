function solution(s) {
  var result =1000
  var l = 0
  while(l < s.length) {
      l += 1
      var answer = '';
      var a = '+'
      var b = 0
      for(let i=0; i<s.length + l ; i+=l) {
        let q = s.slice(i-l,i)
          if(a == q) {
              b += 1;
          } else {
              if(b > 0) {
                  answer += `${b+1}${a}`
              } else {
                if(a !== '+')
                  answer += a
              }
              a = q
              b = 0
          }

      }
      if(b > 0) {
          answer += `${b+1}${a}`
      } else {
          answer += a
      }
      if(answer.length < result) {
          result = answer.length
      }
  }
  return result;
}