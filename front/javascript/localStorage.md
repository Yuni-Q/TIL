
# localStorage

```javascript
localStorage.setItem('nickName', result.data.result.nickName);
// localStorage.nickName = result.data.result.nickName;
```
localStorage에 값 저장 2.5MB ~ 5MB 정도의 정보를 저장 할 수 있습니다.  
또한 객체를 저장 할 수 없기 떄문에 JSON.stringify(data)로 데이터를 저장 합니다.  

```javascript
localStorage.getItem('nickName');
// localStorage.nickName;
```
localStorage에서 객체를 꺼내 사용 할 때 JSON.parse(data)를 통해 객체를 이용 할 수 있습니다.  