function solution(p) {
  if(p.length < 1) {
      return [];
  }
  var answer1 = '';
  var answer2 = '';
  while (p.length > 0) {
  let a = 0;
  let b = 0
  let e = false;
  for(let i = 0 ; i < p.length ; i++) {
      if(p[i] == '(') a += 1;
      if(p[i] == ')') a -= 1;
      if(a < 0) {
          b = i
          break;
      }
      if( p.length -1 == i) {
        return answer1 + p + answer2;
      }
  }
  if(b == 0 || a > 0) {
      a = 0;
      e = true;
      for(let i = p.length-1 ; i > 0  ; i--) {
          if(p[i] == '(') a += 1;
          if(p[i] == ')') a -= 1;
          if(a > 0) {
              b = i+1
              break;
          }
      }
  }
  console.log(222 , b, p.length)
  if(b == p.length-1 || b == 0) {
      let q = p.slice(1, p.length-1)
      p = `(${q})`
      continue;
  } else {
      let c = !!e? p.slice(0, b) : p.slice(b)
      console.log(b, p,99,p.slice(0, b) ,22, p.slice(b) )
      if(!e) answer1 += p.slice(0, b);
      if(!!e && c.length > 0) {
          let w = c.slice(1, c.length-1)
          let g = ''
          for(let i = 0 ; i < w.length ; i++) {
              if(w[i] == '(') g += ')'
              if(w[i] == ')') g += '('
          }
          p = `(${g})${p.slice(b)}`
      } else {
          p = c
          if(!!e) answer2 = p.slice(b) + answer2;
      }
  }
      }
  return answer1 + answer2;
}
// (())
// )(((())
// ())))()(())
console.log(solution("(()))(((())((())"))
// console.log(solution("()))((()"))
// console.log(solution(")("))
