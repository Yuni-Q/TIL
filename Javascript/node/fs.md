
# fs

## 1. 파일 확인
```javascript
fs.exists('test1.txt', function (exists) {
  console.log(exists ? "it's there" : "no exists!"); 
});
```

## 2. 파일 생성
```javascript
const file = 'test1.txt';
fs.open(file, 'w', function(err,fd) {
  if (err) throw err; 
  console.log('file open complete'); 
});
```
|옵션|설명|
|--|---|
|r|파일을 읽기로 열며 해당 파일이 없다면 에러발생|
|r+|읽기/쓰기 상태로 파일을 열며 파일이 없다면 에러 발생|
|w|쓰기로 파일을 열며 존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀|
|w+|읽기/쓰기로 열며  존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀|
|a|추가 쓰기로 열며 파일이 존재하지 않으면 만듬|
|a+|추가 읽기/쓰기로 열며 파일이 존재 하지 않으면 만듬|

## 3. 이름 변경
```javascript
fs.rename('test1.txt', 'text2.txt', function (err) {
  if (err) throw err;
  console.log('renamed complete');
});
```
해당 파일이 없거나 권한이 없다면 에러가 발생합니다.  
또한 변경하려는 이름의 같은 이름의 파일이 존재하면 에러가 발생합니다.  

## 4 파일 삭제
```javascript
fs.unlink('text2.txt', function (err) {
  if (err) throw err;
  console.log('successfully deleted text2.txt');
});
```
해당 파이 없거나 권한이 없다면 에러가 발생합니다.  

## 5. 파일 읽기
```javascript
fs.readFile('test1.txt', 'utf8', function(err, data) {
  console.log(data);
});
```

## 6. 파일 쓰기
```javascript
const data = 'file system example!!';
fs.writeFile('text1.txt', data, 'utf8', function(error){
  console.log('write end')
});
```
만일 파일이 존재 하지 않으면 파일을 생성후 내용을 씁니다.  
파일의 내용을 이어서 쓰진 않습니다.

## 7. 파일 이어서 쓰기
```javascript
fs.appendFile('test1.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```
해당 파일에 내용을 이어서 씁니다.  
파일이 없을경우 새로 생성하여 씁니다.   

### 참고
대부분의 함수가 파일이 없을 경우 에러를 발생시키므로 먼저 파일을 있는지 확인하거나 파일을 open()를 통하여 쓰기 모드로 연상태에서 해당 함수들을 실행 시킵니다.  
