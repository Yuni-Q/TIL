// https://www.acmicpc.net/problem/10844

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
var idx = 0;
var n =  parseInt(input[idx++]);
var check = 0;
var mod = 1e9;
var DT = [];
DT[1] = [0,1,1,1,1,1,1,1,1,1];
for (var i = 2; i <= n; i++) {
  if(!DT[i])  DT[i] = [];
  for (var j = 0; j < 10; j++) {
    DT[i][j] = 0;
    if (j+1 <= 9)  DT[i][j] += DT[i-1][j+1];
    if (j-1 >= 0) DT[i][j] += DT[i-1][j-1];
    DT[i][j] %= mod;
  }
}

var ans = DT[n].reduce(function (a,b) {
  return a+b;
});
console.log(ans%mod);