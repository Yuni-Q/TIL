
// 백준 초콜릿 자르기
// https://www.acmicpc.net/problem/2163

// var n = 2
// var m = 2

// 2 2 3
// 2 3 5
// 3 3 8

// console.log(n * m - 1);

var fs = require('fs');
var input;

if(process.platform=="win32"){
    input = fs.readFileSync('input.txt','utf8').toString().trim().split('\n');

}
else{
    input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
}

var n = input.shift().split(' ');

console.log(n[0] * n[1] - 1)
