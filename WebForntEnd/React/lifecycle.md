# lifecycle

- class에서 constructor -> render -> ref -> componentDidmount
- (setState/props) 바뀔 때 -> shouldComponentUpdate(true)-> render -> componentDidUpdate
- 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

## componentDidmount

- 컴포넌트가 천 렌더링 된 후
- 비동기 요청을 많이 해요.

## componentDidUpdate

- 리렌더링 후

## componentWillUnmount

- 컴포넌트가 제거되기 직전
- 비동기 요청 정리를 많이 해요.

## useEffect

- componentDidmount, componentDidUpdate, componentWillUnmount 역할

```jsx
useEffect(() => {
  // componentDidmount, componentDidUpdate
  return () => {
    // componentWillUnmount
  };
}, [id]);
```

- 두번째 인수에 참조할 값을 넣는다.
- 빈 배열의 경우 componentDidmount의 기능만 수행
- componentDidUpdate와 다르게 useEffect로 분리해서 분기문이 아니라 여러개 사용 가능
- uselayoutEffect : 화면 바뀌는 것을 감지(변겨이 있을 때 모두 변경되기 전에)
- class의 lifecycle과 useEffect의 관리 포인트는 교차이다(useEffect는 사용에 따라 유용하게 사용 가능)

## 생명 주기 메소드

- 초기화 단계

  - constructor()
  - static getDreivedStateFromProps()
  - render()
  - componentDidMount()

- 업데이트 단계

  - static getDreivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

- 소멸 단계

  - componentWillUnmount()

- 예러 발생
  - static getDerivedStateFromError()
  - componentDidCatch()

## constructor(props)

- props 매개변수는 컴포넌트의 기본 속성상이 적용된 상태로 호춯 된다.
- constructor 메서드 내부에서 반드시 super 함수를 호출해야 한다. super 함수를 호출해야 React.Component 클래스의 constructor 메소드가 호출된다.
- constructor 메서드 작성이 필요한 대표적인 예는 초기 속성값으로부터 상탯값을 만드는 경우다.
- 자바스크립트 표준이 될 것이 거의 확실한 클래스 필드를 사용하면 constructor 메서드를 사용하지 않고 같은 기능을 구현할 수 있다.
- constructor 메서드에서는 setState 메서드를 호출하지 말자. setState 메서드 호출은 컴포넌트가 마운트된 이후에만 유효하기 때문에 constructor 메서드 내부에서 호출되는 setState 메서드는 무시된다.

## static getDreivedStateFromProps(props, state)

- getDreivedStateFromProps 메서드는 속성값을 이용해서 새로운 상탯값을 만들 때 사용된다.
- 이 메서드는 render 메서드가 호출되기 직전에 호출 된다.
- 정적 메서드이기 때문에 함수 내부에서 this 객체에 접글할 수 없다.
- getDreivedStateFromProps 메서드는 시간에 따라 변하는 속성값으로부터 상탯값을 계산하기 위해 추가됐다. 보통 애니메이션 관련된 속성값으로부터 상탯닶을 계산할 때 유용하다.
- getDreivedStateFromProps 메서드의 매개변수에 이전 속성값을 넣지 않은 이유
  - 이전 속성값을 넣을 경우, 최초로 호출될 때는 이전 속성값이 없기 때문에 항상 null을 검사하는 코드가 필요하다.
  - 앞으로 모든 생명 주기 메서드의 매개변수에서 이전 속성값을 제거할 예정이다. 이전 속성값이 필요 없어지면 더 이상 메모리에 담고 있지 않아도 되기 때문에 메모리를 절약할 수 있다.
- getDreivedStateFromProps 메서드를 잘못 사용하는 대표적인경우
  - 속성값 변화에 따라 API를 호출해야 하는 경우
    - componentDidUpdate
  - 속성값을 입력으로 하는 메모이제이션을 상탯값으로 관리하는 경우
    - render
  - 속성값이 변경 될 때 상탯값을 초기화하는 경우
- getDreivedStateFromProps 메서드가 필요한 경우
  - 이전 속성값과 이후 속성값 모두에 의존적인 상태값이 필요한 경우
  ```jsx
  class MyComponent extends React.Component {
    state = {
      // ...
      prevSpeed: this.props.speed,
      isMovingFaster: false
    };
    static getDreivedStateFromProps(props, state) {
      if (props.speed !== state.prevSpeed) {
        return {
          isMovingFaster: state.prevSpeed < props.speed,
          prevSpeed: props.speed
        };
      }
      return null;
    }
  }
  ```

## render

- render 메서드는 컴포넌트를 정의할 때 반드시 작성해야 한다.
- 화면이 보여질 render 메서드의 반환겂의 내용을 결정한다.
- 렌더 함수는 순수 함수로 작성해야 한다.
  - 렌더 람수 내부에서 setState를 호출하면 안 된다.
  - 렌더 함수의 변환값은 속성값과 상탯값만으로 결정되어야 한다.
  - 부수 효과를 발생시키면 안 된다.
  - 서버와 통신하기, 브라우저 쿠키에 저장하기 등은 부수효과 이므로 렌더 함수 내부에ㅐ서는 피해야 한다.

## componentDidMount

- componentDidMount 메서드는 render 메서드의 첫 번째 반환값이 실제 돔에 반영 된 직후 호출 된다.
- render 메서드에서 반환한 리액트 요소가 돔에 반영 되어야 알 수 있는 값을 얻을 수 있다.
- componentDidMount 메서드는 API 호출을 통해 데이터를 가져올 때 적합하다. setState 메서드가 마운트 이후에만 동작하기 때문이다.
  - 프로미스를 이용하면 constructor 메서드에서 API 호출을 하고 componentDidMount 메서드에서 setState 메세드를 호출 할 수 있다.
  ```jsx
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.dataPromise = requestData();
    }
    componentDidMount() {
      this.dataPromise.then(data => this.setState({ data }));
    }
  }
  ```

## shouldComponentUpdate(nextProps, nextState)

- shouldComponentUpdate 메서드는 성능 최적화를 위해 존재한다.
- 이 메서드는 불 타입을 반환한다. 만약 참을 반환하면 render 메서드가 호출 된다.
- shouldComponentUpdate 메서드는 렌더링 성능 최적화에 사용된다. 하지만 성급하게 성능을 고려해서 개발할 필요는 없다. 성능 이슈가 발생했을 때 shouldComponentUpdate 메서드를 작성해도 늦지 않다.

## getSnapshotBeforeUpdate(prevProps, prevState) => snapshot

- getSnapshotBeforeUpdate 메서드는 렌더링 결과가 실제 돔에 반영되기 직전에 호출 된다.
- getSnapshotBeforeUpdate 메서드가 호출되는 시점에 이전 돔 요소의 상태값을 가져오기 좋다.
- getSnapshotBeforeUpdate 메서드가 반환한 값은 componentDidUpdate 메서드의 세 번째 인자로 들어간다.

## componentDidUpdate(prevProps, prevState, snapshot)

- componentDidUpdate 메서드는 업데잍 단계에서 마지막으로 호출되는 생명 주기 메서드다.
- componentDidUpdate 메서드는 가상 돔이 실제 돔에 반영된 후 호출 된다. 따라서 componentDidUpdate 메서드는 새로 반영된 돔의 상탯값을 가장 빠르게 가져 올수 있는 생명 주기 메서드다.
- componentDidUpdate 메서드는 첫 렌더링 후에 호출되지 않는다.

## componentWullUnmount

- componentWullUnmount 메서드는 소멸 단계에서 호출되는 유일한 생명 주기 메서드다.
- 끝나지 않은 네트워크 요청을 취소, 타이머 해저, 구독 해제 등의 작업을 처리하기 좋다.
- 컴포넌트에서 componentDidMount 메서드가 호출되면 componentWullUnmount 메서드도 호출되는 것이 보장된다.

## getDerivedStateFromError(error), componentDidCatch(error, info)

- getDerivedStateFromError, componentDidCatch 메서드는 생명 주기 메서드에서 발생한 예외를 처리할 수 있다.
- 생명 주기 메서드에서 예외가 발생하면 getDerivedStateFromError 또는 componentDidCatch 메서드를 구현한 가장 가까운 부모 컴포넌트를 찾는다.
- error 매개변수는 예외가 발생할 때 전달된 에러 객체다. info 매개변수는 어떤 컴포넌트에서 예외가 발생했는지 알려준다.
- getDerivedStateFromError 정적 메서드는 에러 정보를 상탯값에 저장해서 화면에 나타내는 용도로 사용된다.
- componentDidCatch 메서드는 에러 정보를 서버로 전송하는 용도로 사용된다. 리액트 16.7에서는 componentDidCatch 메서드에서도 에러 정보를 상탯값에 저장해서 화면에 나타낼 수 있지만, 추후 componentDidCatch 메서드에서 setState 호출이 막힐 것으로 보인다. componentDidCatch 메서드는 렌더링 결과를 돔에 반영한 후에 호출 되기 때문에 몇가지 문제를 안고 있다. 대표적으로 서버사이드 렌더링 시 에러가 발생해도 componentDidCatch 메서드는 호출되지 않는 문제다.
- ErrorBoundary 컴포넌트는 애플리케이션의 최상위 컴포넌트가 아니어도 된다. 단, ErrorBoundary 컴포넌트의 자식 컴포넌트에서 발생한 예외만 처리할 수 있다.
- ErrorBoundary 머포넌트를 여러 곳에서 사용해도 괜찮다. 그러면 예외가 발생한 일부 화면에만 에러 정보가 렌더링되고, 나머지 부분은 정상적으로 렌더링 된다.
- 리액트 예외 발생 시 ErrorBoundary 컴포넌트로 처리하지 않으면 모든 컴포넌트를 언마운트 한다. 이는 잘못된 정보를 사용자에게 보여 주는 것보다는 아무것도 보여 주지 않는 것이 낫기 때문이다. 물론 아무것도 보여 주지 않는 것보다는 ErrorBoundary 컴포넌트를 이용해서 에러 화면을 보여 주는 게 더 낫다.
