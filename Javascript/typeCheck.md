
# type Check

## typeof
- string, number, boolean을 체크 할 때 사용
- null에 대해서는 명시적 에러가 있지만 다른 것에 영향을 줄 것이 예상 되어 고치지 않음
- 배열과 오브젝트 구분이 불가

## Null이 Object인 이유??
```javascript
typeof null === 'object' // true
```
- typeof에서 null을 체크하지 않아서 else에 걸리는 것이다.

## instanceof
- 배열과 객체의 경우 instanceof를 사용
