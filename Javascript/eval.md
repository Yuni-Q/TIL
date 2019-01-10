
# eval

String 형태의 JavaScript 소스 코드를 동적으로 실행 할 수 있다.  

```javascript
var dateFn = "Date(1971,3,8)";
var myDate;
eval("myDate = new" + dateFn + ";");

document.write(myDate);
// Output: Tue Apr 8 00:00:00 PDT  1971
```
