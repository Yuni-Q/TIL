# keyframes

- 키프레임을 만들고 애니메이션 속성으로 요소에 적용합니다.
- from과 to로 지정하거나 퍼센트(%)를 이용해서 지정할 수 있습니다.

## keyframes vs transition

- keyframes
  - 변화값 작동
  - 스스로 작동
  - 반복가능
  - 순방향진행, 역방향진행, 양방향진행 가능
- transition
  - 변화하는 속성값이 있어야 작동합니다.
  - :hover, :checked

## animation

### animation-name

- 내가 만들 애니메이션의 이름을 적어 줍니다.
- 숫자나 특수문자로 시작하면 안 됩니다.
- 문자열 \_, - 으로 시작해야 합니다.

### animation-duration

- 애니메이션의 작동되는 시간을 지정합니다.
- s, ms를 사용 할 수 있으며

### animation-delay

- 애니메이션의 지연시간!
- 요소가 로드되고 지연시간이 지나면 애니메이션이 작동됩니다.

### animation-direction

- 애니메이션의 진행방향
- alternate, reverse

### animation-iteration-count

- 애니메이션의 진행횟수 또는 반복
- 숫자, infinite

### animation-play-state

- 애니메이션의 진행횟수 또는 반복
- paused, running

### animation-timing-function

- 전환속도의 효과
- liner, ease-in, ease-out, ease-in-out, ease

### animation-fill-mode

- 애니메이션이 끝난 후 처음으로 이동할지 끝을 유지할지를 설정 할 수 있습니다.
- none : 지정 없음
- forwards : 마지막 키프레임을 유지
- backwards : 시작 전 스타일을 미리 적용
- both : forwards, backwards 둘다 적용
