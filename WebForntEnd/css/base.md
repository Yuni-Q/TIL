# CSS

- 고정된 폭보다 백분율을 사용한다. 이것이 어려울 때는 뷰포트 관련 단위(vm, wh, wmin, wmax)를 사용하여 뷰포트를 가로 또는 세로로 분할하여 보이도록 한다.
- 큰 해상도에서 고정된 폭을 지정할 때는 width가 아니라 max-width를 사용하도록 하여 작은 해상도에서도 미디어 쿼리 없이 적용 되도록 한다.
- \<img>, \<object>, \<video>, \<iframe>과 같은 대체 요소를 위해 max-width를 100%로 설정하는 것을 잊지 말자.
- 배경 이미지가 전체 내용을 커버해야 할 경우 background-size: cover를 사용하면 내용의 크기에 상관없이 유지할 수 있다. 그러나 CSS로 모바일 설계를 할 때는 대역폭(brandwidth)의 한계가 있으므로 큰 크기의 이미지를 포함하는 것은 현명하지 않다.
  - contain 속성도 있다.
- 레이아웃 이미지(또는 다른 요소)가 가로와 세로 그리드가 있을 때 세로 번호가 뷰포트 너비이다.

## 축약형

- 축약형은 권장 되지만 무조건 옳다고 볼 순 없다.

## 전처리기 사용 전에 고려해야 할 점들

- 파일 크기와 복잡성
- 디버깅이 더 힘들어 진다.
- 지연 시간
- 협업자를 고르는데 제한이 생기고 사용법을 가르치기 위한 시간이 필요
- 작은 것까지 모두 추상화한다면 빈틈이 생기기 마련이다.
  - 자체의 버그가 있을 수 있다.
- 다수의 전처리기를 연산시키는 기능들이 이미 순수한 CSS에도 많이 만들어져 있다.
- CSS에서도 변수를 사용 할 수 있다.

```css
:root {
  --main-color: hotpink;
}
p {
  background: var(--main-color);
}
```

## myth.io
