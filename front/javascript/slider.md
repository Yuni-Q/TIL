
# slider
2초마다 1에서 5가 반복 되는 script를 좌우를 눌러서 움직이는 것으로 변경해 보겠습니다.
> 기본은 노마더코더 유투브 자료 [바닐라 자바스크립트로 "캐러셀 슬라이더" 만들기 (Vanilla JS : making Carousel slider)
](https://www.youtube.com/watch?v=l18HCZqBs6I) 입니다.  
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Slider</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        margin: 0;
      }
      .slider {
        width: 100%;
        position: relative;
      }
      .slider__item {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        position: absolute;
        top: 0;
        z-index: 0;
        opacity: 0;
        transition: all 0.5s ease-in-out;
        transform: scale(0.9);
      }
      .slider__item:nth-child(odd) {
        background-color: #8e44ad;
      }
      .slider__item:nth-child(even) {
        background-color: #3498db;
      }
      .showing {
        opacity: 1;
        z-index: 1;
        transform: none;
      }
      .button {
        position: absolute;
        z-index: 100;
        opacity: 100;
        height: 30px;
        width: 30px;
      }
      .before {
        top: 250px;
        left: 20px;
      }
      .after {
        top: 250px;
        right: 20px;
      }
    </style>
  </head>
  <body>
      <button class="button before" onclick="slide_before();">&lt;</button>
    <div id="slider">
      <div class="slider__item"><h1>1</h1></div>
      <div class="slider__item showing"><h1>2</h1></div>
      <div class="slider__item"><h1>3</h1></div>
      <div class="slider__item"><h1>4</h1></div>
      <div class="slider__item"><h1>5</h1></div>
    </div>
    <button class="button after" onclick="slide();">&gt;</button>
    <script>
      const SHOWING_CLASS = "showing";
      const firstSlide = document.querySelector(".slider__item:first-child");
      const LastSlide = document.querySelector(".slider__item:last-child");
      function slide() {
        const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
        if (currentSlide) {
          currentSlide.classList.remove(SHOWING_CLASS);
          const nextSlide = currentSlide.nextElementSibling;
          if (nextSlide) {
            nextSlide.classList.add(SHOWING_CLASS);
          } else {
            firstSlide.classList.add(SHOWING_CLASS);
          }
        } else {
          firstSlide.classList.add(SHOWING_CLASS);
        }
      }
      function slide_before() {
        const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
        if (currentSlide) {
          currentSlide.classList.remove(SHOWING_CLASS);
          const beforeSlide = currentSlide.previousElementSibling;
          if (beforeSlide) {
            beforeSlide.classList.add(SHOWING_CLASS);
          } else {
            LastSlide.classList.add(SHOWING_CLASS);
          }
        } else {
          LastSlide.classList.add(SHOWING_CLASS);
        }
      }
      slide();
      // setInterval(slide, 2000);
    </script>
  </body>
</html>
```