# memo

## memo란?

- React.memo는 higher order component.
- React.PureComponent 클래스와 비슷 하지만 function components와 유사합니다.
- function components가 동일한 소품을 사용하여 동일한 결과를 렌더링하는 경우 결과 React.memo를 메모하여 성능 향상 을 위한 호출로 랩핑 할 수 있습니다. 이것은 React가 컴포넌트 렌더링을 건너 뛰고 마지막으로 렌더링 된 결과를 재사용한다는 것을 의미합니다.

- 기본적으로이 객체는 소품 객체의 복잡한 객체를 얕게 비교합니다. 비교를 제어하려면 두 번째 인수로 사용자 지정 비교 함수를 제공 할 수도 있습니다. 이 방법은 성능 최적화로만 존재합니다. 렌더가 버그를 유발할 수 있으므로 렌더링을 "방지"하기 위해 그 위에 의존하지 마십시오.

- shouldComponentUpdate()클래스 구성 요소의 메소드 와 달리 areEqual함수는 true소품이 동일하고 소품이 동일 false하지 않으면 반환 됩니다 . 이것은에서 반대입니다 shouldComponentUpdate.

## PureComponent

- React 구성 요소의 render()기능이 동일한 소품 및 상태에서 동일한 결과를 렌더링하는 React.PureComponent경우 일부 경우 성능 향상을 위해 사용할 수 있습니다.

- React.PureComponent'는 shouldComponentUpdate()경우에만 얕게 개체를 비교합니다. 이것들이 복잡한 데이터 구조를 포함하고 있다면, 더 깊은 차이에 대해 잘못된 음이 생길 수 있습니다.
- PureComponent단순한 소품과 상태가 필요할 때만 연장 하거나 forceUpdate()심층 데이터 구조가 변경된 사실을 알고있을 때 사용하십시오 . 또는 불변 개체 를 사용하여 중첩 된 데이터를 빠르게 비교할 수 있습니다.
- React.PureComponent의는 shouldComponentUpdate()전체 구성 요소 하위 트리에 대한 소품 업데이트를 건너 뜁니다. 모든 하위 구성 요소가 "순수"한지 확인하십시오.

## memo 올바르게 사용하기

- 가장 중요한 부분은 `React.memo` 가 props 에 대해서 `얕은 비교 (Shallow Copy)` 를 진행한다는 부분입니다.

1. 기본타입(Number, String, null, undefined, Boolean)은 해당 값을 직접적으로 비교합니다. (단, Symbol은 제외)
2. Object 는 Reference 를 체크합니다. 즉, 주소값을 비교합니다.

- 인라인 스타일의 문제점이 발생합니다. 인라인 스타일을 사용하게 되면, 계속해서 새로운 Object 가 만들어지기 때문에 `React.memo` 에서 수행하는 **Shallow Copy 는 계속해서 새로운 객체(Object) 의 Reference 를 체크하기 때문에 불필요한 작업(비교)이 추가**됩니다.
- 화살표 함수를 넘기면 항상 리랜더
  - useCallback으로 방지 가능
