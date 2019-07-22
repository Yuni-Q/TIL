# from 메소드

```javascript
function addMark() {
  let newArray = Array.from(arguments);
  let newData = newArray.map(function(value) {
    return value + "!";
  });

  console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9);
```

- arguments는 map을 쓸 수 없기 때문에 Array.from을 사용해서 진짜 배열로 만들어 줍니다.
