# inline-block로 가초 배치시 정렬이 이상한 이유

- inline-block 안에 텍스트가 있는지 없는지에 따라 정렬 되는 기준이 바뀐다.
- 정렬 기준은 vertical-align 값이다.
- line-height를 요소의 높이와 맞추고 vertical-align: top;으로 하는 것이 가장 쉽게 레이아웃을 맞출 수 있다.
