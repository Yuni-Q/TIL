# box-model

```css
/* 기본값 */
box-sizing: content-box;
/* border까지 width에 포함 */
box-sizing: border-box;
```

- margin - border - padding - content 순
- `block`은 너비를 알아서 결정 한다(`padding`이 있어도 `content-box`여도 무관)
- `inline`은 `width`, `height`를 가질 수 없다. 이를 위한 대안으로 `inline-block`가 있다.
- `inline-block`로 하고 값을 `100%`에 맞게 계산해도 한 줄로 나오지 않을 경우에는 사이의 공백 때문일 수 있기 때문에 `font-size`를 `0`으로 하면 해결 할 수 있다.
  - 하지만 font-size는 상속되기 때문에 아래에서 다시 선언해 주어야 한다.
  - 아래쪽을 기준으로 정렬 되어 있는데 `vertical-align: top`을 한다.
- `max-width`로 최대 너비를 지정할 수 있고 `margin: auto`로 여백을 균등하게 가져 갈 수 있다.
- `float: left`를 통해서 2개의 div를 한줄로 만들 수 있다.
  - `clear: both`가 필요하다.
  - 자식들이 float로 되어 있으면 부모는 자식을 품고 있지 않은 것처럼 높이가 없다.
  - 가상 클래서 `after`을 활용해 이 문제를 해결한다.

```css
.container:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
```
