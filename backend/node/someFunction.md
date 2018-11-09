
# some

.some()은 컬렉션의 요소 중 최소 1개라도 조건을 만족시키는지 검사하는 메서드 입니다.<br>
forEach는 break, continue가 불가능 합니다.<br>
이에 따라 some을 사용<br>
```javascript
const a = [1, 2, 3, 4, 5]

a.some(b => {
  console.log(b);
  if (b === 3) {
    return true;
  }
})
// 1
// 2
// 3
```
> return true는 break<br>
> return false는 continue<br>

## 참고
> jQuery의 $.each에서는 어떨까요?<br>
> return true; 가 continue 이며,<br>
> return false; 는 break 입니다.<br>
> some과 다른이유는 some이 break와 continue를 위해 return true와 false를 하는 용도로 만들어진게 아니기 때문입니다.<br>
