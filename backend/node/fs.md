
# fs

## 1. 파일 확인
```javascript
fs.exists('test1.txt', function (exists) { console.log(exists ? "it's there" : "no exists!"); });
```

## 2. 파일 생성
```javascript
var file = 'test1.txt'; fs.open(file,'w',function(err,fd){ if (err) throw err; console.log('file open complete'); });
```
|옵션|설명|
|--|---|
|r|파일을 읽기로 열며 해당 파일이 없다면 에러발생|
|r+|읽기/쓰기 상태로 파일을 열며 파일이 없다면 에러 발생|

 w

  쓰기로 파일을 열며 존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.

 w+

  읽기/쓰기로 열며  존재 하지 않으면 생성. 파일이 존재하면 내용을 지우고 처음부터 씀.

 a

 추가 쓰기로 열며 파일이 존재하지 않으면 만듬. 

 a+

 추가 읽기/쓰기로 열며 파일이 존재 하지 않으면 만듬.



출처: http://uiandwe.tistory.com/933 [조아하는모든것]

## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript

## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript
## 1. 파일 확인
```javascript

