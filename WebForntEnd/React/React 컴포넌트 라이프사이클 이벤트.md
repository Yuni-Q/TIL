
# React 컴포넌트 라이프사이클 이벤트
- componentWillMount()는 서버와 클라이언트에서 모두 실행되는 반면에, componentDidMount()는 클라이언트에서만 실행된다
    - componentWillMount는 곧 사라질 api로 지양되면 constructor에서 사용 할 것을 권장한다.
- 마운팅 이벤트는 일반적으로 React를 다른 라이브러리와 통합하거나 저장소 또는 서버에서 데이터를 가져올 때 사용된다.
- shouldComponentUpdate()를 사용해서 렌더링을 최적화 할수 있다.
- componentWillReceveProps()를 사용하면 새로운 속성이 전달 될 때 상태를 변경할 수 있다.
- 언마운팅 이벤트는 일반적으로 정리에 사용된다.
- 갱신 이벤트는 새로운 속성이나 상태를 의존하는 로직을 작성할 때 사용되고, 뷰를 갱신하는 시점을 세밀하게 조절할 수 있다.
- componentDidCatch()는 오류나 예외 처리를 위해 사용할 수 있다.

## 퀴즈
- componentWillMount()는 서버 렌더링 시에 호출 되지 않는다.
- componentWillMount()와 componentDidMount() 중 먼저 호출 되는 것은 componentDidMount()이다.
- 서버에서 데이터를 가져오기 위해 AJAX 요청을 하기에 적절한 위치는 componentDidMount()이다.
- componentWillReceiveProps()는 부모의 구조로부터 엘리먼트가 다시 렌더링되었으며, 속성에 새로운 값이 전달되었다느 것은 확신할 수 없다.
- 마운팅 이벤트는 재렌더링 때 발생하지 않는다. 마운팅 과정이 상대적으로 비용이 많이 드는 작업이기 때문이다.
