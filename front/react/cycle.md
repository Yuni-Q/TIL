
# cycle

## 컴포넌트를 생성 할 때는
constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

## 컴포넌트를 제거 할 때는
componentWillUnmount 메소드만 실행됩니다.

## 컴포넌트의 prop이 변경될 때엔
componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

> state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

### constructor
> 생성자 메소드로서 컴포넌트가 처음 만들어 질 때 실행됩니다.<br>
> 이 메소드에서 기본 state 를 정할 수 있습니다.<br>

### componentWillMount
> 컴포넌트가 DOM 위에 만들어지기 전에 실행됩니다.<br>

### render
> 컴포넌트 렌더링을 담당합니다.<br>

### componentDidMount
> 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.<br>
> 이 안에서 다른 JavaScript 프레임워크를 연동하거나,<br>
> setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.<br>

### componentWillReceiveProps
> 컴포넌트가 prop 을 새로 받았을 때 실행됩니다.<br>
> prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.<br>
> 이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.<br>

### shouldComponentUpdate
> prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.<br>
> 위 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.<br>
> 예: return nextProps.id !== this.props.id;<br>
> JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.<br>

### componentWillUpdate
> 컴포넌트가 업데이트 되기 전에 실행됩니다.<br>
> 이 메소드 안에서는 this.setState() 를 사용하지 마세요 – 무한루프에 빠져들게 됩니다.<br>

### componentDidUpdate
> 컴포넌트가 리렌더링을 마친 후 실행됩니다.<br>

### componentWillUnmount
> 컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.<br>

## 설명
### constructor(props)
메서드는 컴포넌트 초기화 시 호출됩니다.  
초기 컴포넌트 상태 및 클래스 메서드를 정의합니다.  

### componentWillMount()
메서드는 render() 메서드 전에 호출됩니다.  
컴포넌트 두 번째 렌더링을 일으키지 않기 때문에 이 메서드에서 컴포넌트 상태를 설정할 수 있지만, constructor() 메서드에서 초기 상태값을 설정하는 것이 바람직합니다.

### render()
메서드는 props 및 state를 읽고 엘레먼트를 반환합니다.  
컴포넌트 출력을 반환하기 때문에 반드시 사용해야 합니다.  

### componentDidMount()
메서드는 컴포넌트가 마운트 될 때 한 번만 호출됩니다.  
일반적으로 이 메서드에서 비동기 API를 사용합니다.  
응답받은 외부 데이터는 내부 컴포넌트 상태에 저장되어 컴포넌트가 업데이트 되면 render() 메서드가 실행됩니다.  

### componentWillReceiveProps(nextProps)
메서드는 업데이트 생명주기에서 호출됩니다.  
다음 props은 nextProps와 이전 props인 this.props의 차이를 비교합니다.  
nextProps를 컴포넌트 state로 사용할 수 있습니다.  

### shouldComponentUpdate(nextProps, nextState)
메서드는 props 또는 state가 변경되어 컴포넌트가 업데이트될 때 호출됩니다.  
고도화된 리액트 애플리케이션에서 성능 최적화를 고려할 때 주로 사용됩니다.  
반환되는 부울 값(boolean)에 따라 컴포넌트와 모든 자식이 업데이트 주기 동안 렌더링 되거나, 반대로 렌더링되지 않게 처리할 수 있습니다.  
문제가 되는 특정 컴포넌트의 생명주기 렌더링을 막을 수 있습니다.  

### componentWillUpdate(nextProps, nextState)
메서드는 render() 메서드 전에 바로 호출됩니다.  
nextProps는 다음 props를, nextState는 다음 state를 조회합니다.  
render() 메서드가 실행되기 전, 상태를 업데이트할 수 있는 마지막 기회입니다.  
render() 메서드가 실행된 이후에는 setState() 메서드를 사용할 수 없습니다.    
nextProps를 state 값으로 사용하려면 componentWillReceiveProps() 메서드를 사용합니다.  

### componentDidUpdate(prevProps, prevState)
메서드는 render() 메서드 후에 즉시 호출됩니다.  
이 메서드에서 DOM 조작을 하거나 추가 비동기 요청을 수행합니다.  

### componentWillUnmount()
메서드는 컴포넌트 해체 전에 호출됩니다.  
이 메서드에서 컴포넌트를 초기화합니다.  

### 그외
그 외 componentDidCatch(error, info) 메서드가 있습니다.  
리액트 버전 16에서 추가된 메서드로 컴포넌트 에러를 캐치합니다.  
예를 들어 API 호출이 실패하여 리스트 상태 값이 null이 된 경우, filter()과 map() 메서드를 사용할 수 없습니다.  
따라서 오류가 발생하여 컴포넌트가 깨지면 애플리케이션 전체가 작동하지 않게 됩니다.  
이때, componentDidCatch()로 오류를 발견하여 오류 메시지를 내부 상태에 저장하고, 이 내용을 화면에 표시할 수 있습니다.


