# background

- background 단축 속성을 사용할 경우 background-size와 background-position을 단축 속성으로 구분 하기 힘들기 때문에 슬래시(/)를 사용해 구분한다.
- background-clip 속성을 사용해 배경의 경계를 지정 할 수 있다.
  - 초깃값을 border-box로 하여 요소의 경계 상자(border-box)의 가장자리에서 자른다.
  - 패딩(padding) 모서리에서 배경을 잘라내도록 브라우저에 명령하는 것으로, 배경선 아래로 확장되는 것이 싫다면 padding-box 값을 지정해 주는 방법도 있다.

- background CSS 단축 속성은 색상, 이미지, 원점, 크기, 반복 등 여러 배경 스타일을 한 번에 지정합니다.
- { background: background-color | background-image | background-repeat | background-attachment | background-position }
- {background: #123456 url(“hooney.net”) no-repeat center left; }