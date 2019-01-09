
# number

## if(!a)
```javascript
let a = undefined;

a = parseFloat(a, 10);
console.log(a); // NaN
if (!a) {
  console.log(a); // NaN
}
console.log(a); // NaN
```
> undefined 숫자로 변환하면 NaN 입니다.  
> NaN은 false 입니다.  

```javascript
let a = 0;

a = parseFloat(a, 10);
console.log(a); // 0
if (!a) {
  console.log(a); // 0
}
console.log(a); // 0
```
> 0은 false 입니다.  

```javascript
let a = 1;

a = parseFloat(a, 10);
console.log(a); // 1
if (!a) {
  console.log(a); 
}
console.log(a); // 1
```
> 정수는 true 입니다.  

```javascript
let a = -1;

a = parseFloat(a, 10);
console.log(a); // -1
if (!a) {
  console.log(a); 
}
console.log(a); // -1
```
> 마이너스 값도 true 입니다.  
> 0을 제외한 모든 정수는 ture 입니다.  

## if(a)
```javascript
let a = 0;

a = parseFloat(a, 10);
console.log(a); // 0
if (a) {
  console.log(a);
}
console.log(a); // 0
```

```javascript
let a = 0;

a = parseFloat(a, 10);
console.log(a); // 0
if (a) {
  console.log(a);
}
console.log(a); // 0
```

```javascript
let a = 0;

a = parseFloat(a, 10);
console.log(a); // 0
if (a) {
  console.log(a);
}
console.log(a); // 0
```

```javascript
let a = 1;

a = parseFloat(a, 10);
console.log(a); // 1
if (a) {
  console.log(a); // 1
}
console.log(a); // 1
```

## isNaN
```javascript
let a = undefined;

a = parseFloat(a, 10);
console.log(a); // NaN
if (Number.isNaN(a)) {
  console.log("NaN !!!"); // NaN !!!
}
console.log(a); // NaN
```
> undefined은 숫자가 아닙니다 !!! 따라서 NaN

```javascript
let a = 0;

a = parseFloat(a, 10);
console.log(a); // 0
if (Number.isNaN(a)) {
  console.log("NaN !!!");
}
console.log(a); // 0
```
> 0은 숫자입니다...  

```javascript
let a = "a11";

a = parseFloat(a, 10);
console.log(a); // NaN
if (Number.isNaN(a)) {
  console.log("NaN !!!"); // NaN !!!
}
console.log(a); // NaN
```
> 문자가 먼저 나오면 NaN  

```javascript
let a = "11a";

a = parseFloat(a, 10);
console.log(a); // 11
if (Number.isNaN(a)) {
  console.log("NaN !!!");
}
console.log(a); // 11
```
> 숫자가 먼저 나오면 문자 전까지 숫자...?  