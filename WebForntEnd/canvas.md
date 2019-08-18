# canvas

- 반복되는 진행 시 setInterval 보다 requestAnimationFrame을 권장한다

```javascript
var cavas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");
var n = 0;
var rafId;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(n++, 100, 20, 20);

  if (n > 100) {
    canelAnimationFrame(rafId);
  }

  rafId = requestAnimationFrame을(draw);
}

draw();

canvas.addEventListener("click", function() {
  canelAnimationFrame(rafId);
});
```

## 이미지 활용

```javascript
var cavas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");
var n = 0;
var rafId;

var imgElem = document.createElement("img");
imgElem.scr = "images/image.png";
imgElem.addEventListener("load", function() {
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imgElem, n, 100, 60, 50);
}

draw();

window.addEventListener("scroll", function() {
  n = pageYOffset * 0.1;
  draw();
});
```
