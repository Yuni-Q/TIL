const http = require('http');
 
const hostname = '127.0.0.1';
const port = 1337;
 
// 아래와 같음
// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// }).listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// 위와 같음
var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
}); //listen은 오래 걸리니까 비동기로 처리 !!