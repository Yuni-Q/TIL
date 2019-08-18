# CSS 가상 클래스 :placeholder-shown

- placeholder 텍스트가 '보이는 상태인지 아닌지' 체크할 수 있는 가상 클래스입니다.

```html
<style>
  .input-text {
    border: 2px solid black;
  }
  .msg {
    color: dodgerblue;
  }

  .input-text:placeholder-shown {
    border-color: gray;
  }
  .input-text:placeholder-shown + .msg {
    display: none;
  }
</style>

<input type="text" class="input-text" placeholder="Your name" />
<p class="msg">Nice name!</p>
```
