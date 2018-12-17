
# for
## 기본
```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
// 0
// 1
// 2
// 3
// 4
// 5
```

## of
```javascript
const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i of a) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
// 0
// 1
// 2
// 3
// 4
// 5
```

## forEach
```javascript
const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a.forEach(i => {
  console.log(i);
  return i
});
console.log('b', b);
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// b undefined
```
> forEach는 break를 사용 할 수 없기 때문에 some 함수를 써야 합니다.<br>
> 값을 리턴하지 않습니다.<br>

## map
```javascript
const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a.forEach(i => {
  console.log(i);
  return i
});
console.log('b', b);
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// b [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```
> break를 사용 할 수 없습니다.<br>
> 값을 리턴 합니다.<br>

## some
```javascript
const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a.some(i => {
  console.log(i);
  if (i === 5) {
    return true;
  }
  return false;
});
console.log('b', b);
// 0
// 1
// 2
// 3
// 4
// 5
// b true
```
.some()은 컬렉션의 요소 중 최소 1개라도 조건을 만족시키는지 검사하는 메서드 입니다.<br>
forEach는 break, continue가 불가능 합니다.<br>
이에 따라 some을 사용<br>
> return true는 break<br>
> return false는 continue<br>


## 참고
> jQuery의 $.each에서는 어떨까요?<br>
> return true; 가 continue 이며,<br>
> return false; 는 break 입니다.<br>
> some과 다른이유는 some이 break와 continue를 위해 return true와 false를 하는 용도로 만들어진게 아니기 때문입니다.<br>

## for of
Symbol.iterator가 있는 값에만 사용 가능 ( ex) 배열, String )   
> Symbol.iterator: 이터러블한 객체를 정의하기 위한 심볼  
```javascript
const = arr = [1,2,3]
for (const val of arr) {
  console.log(val);
}
```

## for in
객체를 순환 할 수 있다.  
하지만 지양하기를 권고한다고 한다.  
__proto__도 출력하기 떄문에 의도치 않은 출력을 할 수 있습니다.  
```javascript
const obj = { '11':1, '22':2, '33':3 };
for (const key in obj) {
  console.log(key); // key 값이다.
  console.log(obj.key); // key 값이다.
}
```


