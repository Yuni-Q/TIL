
# react onChange와 onInput의 비교

- React에서 onChange는 모든 변경에 대해 발생하므로 DOM의 change 이벤트가 매번 발생하지 않고 포커스를 잃었을 때만 발생하는 것과는 차이가 있다.
- React의 onChange와 HTML의 onChange는 서로 다르게 동작한다.
    - React의 onChange 이벤트는 HTML의 onInput 이벤트와 더 비슷하고 일관성이 있다.
- React에서는 가급적 onChange 이벤트를 활용하고, onInput 이벤트의 네이티브 구현에 접근해야 하는 경우에만 onInput을 사용하는 것을 추천한다. React의 동작이 일관성 있어 믿을 수 있기 때문이다.