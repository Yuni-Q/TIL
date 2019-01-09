
# Streams
스트림은 배열이나 문자열같은 데이터 컬력션 입니다.  
스트림이 어려운 것은 한번에 모든 데이터를 얻을 수 없다는 점 입니다. 게다가 메모리에 딱 맞지 않습니다.  
스트림의 이러한 점은 엄청 큰 데이터를 다룰 때나, 외부 소스로부터 데이터를 한번에 한 청크(chunk)씩 가져올때 힘을 발휘합니다.  

리눅스 명령어를 다른 작은 명령어들과 파이핑(piping)하여 구성할수 있는 것처럼, 노드 스트림에서도 완전 똑같이 할 수 있습니다.

> fs.readFile로 파일을 제공한다면, 한계치를 변경하지 않고서는 파일을 제공할 수 없을 것입니다.  
> 하지만 fs.createReadStream을 사용하면 요청자에게 2GB 데이터를 스트리밍할 수 있습니다. 게다가 프로세스의 메모리 사용량은 거의 차이가 없을 것이고요.

```javascript
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);
```

```javascript
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./big.file', (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

server.listen(8000);
```

