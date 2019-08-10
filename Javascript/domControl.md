# dom control

- element의 크기 등의 정보를 가져 올 수 있다.

```javascript
var first = document.querySelector("#first");
var f = first.getBoundingClientReat();
```

- 두점 사이의 각도를 구할 수 있다.

```javascript
var 라디안 = Math.atan2(
  mouseY - (y + heught * 0.5),
  mouseX - (x + width * 0.5)
);
var deg = (180 * 라디안) / Math.PI;
```
