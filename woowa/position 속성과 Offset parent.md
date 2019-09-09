# position 속성과 Offset

## position

- static: 기본값, 다른 태그와의 관계에 의해 자동으로 배치되며 위치를 임의로 설정해 줄 수 없습니다. 움직이지 않고 정적인 상태입니다.
- relative: 원래 있던 위치를 기준으로 좌표를 지정합니다. 부모 엘리먼트를 기준으로 상대적으로 움직인
- absolute: 절대 좌표와 함께 위치를 지정해 줄 수 있습니다. position값이 relative인 부모를 기준으로(없다면 웹페이지의 가장 가장자리 기준) 움직입니다.
- fixed: 스크롤과 상관없이 항상 문서 최 좌측상단을 기준으로 좌표를 고정합니다.
- inherit: 부모 태그의 속성값을 상속받습니다.

## offset

- top / right / bottom / left

- 입력한 수치만큼씩 위치를 떨어져 위치될지 결정할 수 있는데 position 속성과 같이 사용됩니다(position:relative / position:absolute)

출처: https://rongscodinghistory.tistory.com/21 [악덕고용주의 개발 일기]
