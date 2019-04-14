// https://www.acmicpc.net/problem/2133

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var n = parseInt(input[0]);
var r = [1, 0, 3];

for (var i = 3; i <= n; i++) {
  r[i] = r[i - 2] * 3;
  for (var m = 4; i - m >= 0; m += 2) {
    r[i] += r[i - m] * 2;
  }
}

console.log(r[n]);

// // 다음과 같은 방법도 있다.
// for (var i = 4; i <= n; i += 2) {
//   r[i] = r[i - 2] * 4 - r[i - 4]
// }
