
# JavaScript 변수
var : functionScoped, 변수 재할당, 재선언 모두 가능합니다.

es2015에서 let과 const가 생성 되었습니다.<br>
let : blockScoped,  변수에 재할당만 가능 합니다 ( 재선언 불가능 )<br>
const : blockScoped, 변수 재선언, 재할당 모두 불가능 합니다.<br>

let을 변수 const를 상수로 var는 사용하지 않는게 좋을듯 하다...

```javascript
{
  a = 3;
  console.log(a); // 3
  var a = 2;
  console.log(a); // 2
  var a = 4;
  console.log(a); // 4
}
console.log(a); // 4
```
> var는 모든 사항에 문제 없습니다 ( 호이스팅, 재선언, 함수 스코프 )

```javascript
{
  a = 3; // a is not defined
  let a = 2;
}
```
> let은 호이스팅이 되지 않습니다.

```javascript
{
  let a = 2;
  console.log(a); // 2
}
console.log(a); // a is not defined
```
> let은 블록 스코프 입니다.

```javascript
{
  let a = 2;
  console.log(a); // 2
  a = 3;
  console.log(a); // 3
  let a = 4;
  console.log(a); // Identifier 'a' has already been declared
}
```
> let은 재선언 되지 않습니다.

```javascript
{
  const a = 2;
  console.log(a); // 2
  a = 3;
  console.log(a); // Assignment to constant variable.
}
```
> const는 let의 모든 특징과 더불어 재할당도 되지 않습니다.
