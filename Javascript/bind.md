# call
- 그냥 함수를 부르는 것과 같아 보일 수 있다.
- 첫번째는 객체 두번째는 변수값을 받을 수 있다.
```javascript
var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
function sum(prefix) {
  return prefix + (this.first + this.second)
}

var kimSum = sum.bind(kim, '-> ');
```
