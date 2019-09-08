function solution(words, queries) {
  var answer = [];
  var qq = []
  var yy = {}
  for(let i = 0 ; i < words.length ; i++) {
      var l = words[i].length
      if(!qq[l]) {
          qq[l] = []
          qq[l].push(words[i])
       } else {
          qq[l].push(words[i])     
       }
  }
  for(let i = 0 ; i < queries.length ; i++) {
      if(!!yy[queries[i]]) {
          answer.push(yy[queries[i]])
          continue;
      }
      let a = ''
      let b = true
      let c = queries[i].length
      let index;
      if(queries[i][0] === '?') {
          index =queries[i].lastIndexOf('?')
          a = queries[i].slice(index + 1)
          b = true
      } else {
          index = queries[i].indexOf('?')
          a = queries[i].slice(0,index)
          b = false
      }
      
      let q = 0
      if(!!qq[c]) {
      for(let j = 0 ; j < qq[c].length ; j++) {
          let d
          let e
          if(queries[i].length !== qq[c][j].length) {
              continue;
          } else {
              if (!!b) {
                  d = qq[c][j].slice(index +1)
                  if (a == d) {
                      q = q + 1
                  }
                  
                  
              } else {
                  d = qq[c][j].slice(0,index)
                  if (a == d) {
                      q = q + 1
                  }
                  
              }
              
          }
      }
          }
      answer.push(q)
      yy[queries[i]] = q;
   }
  return answer
}