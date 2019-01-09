var fs = require('fs');

console.log(1);

// Sync (동기)
var data = fs.readFileSync('data.txt', {encoding:'utf8'});

console.log(data);

// Async (비동기)

console.log(2);

fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data)
})

console.log(4);

// 실행 순서 !!
// 1
// Hello Sync And Async
// 2
// 4
// 3
// Hello Sync And Async
