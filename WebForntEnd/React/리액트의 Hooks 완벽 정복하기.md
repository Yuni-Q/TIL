# 리액트의 Hooks 완벽 정복하기

- Hooks 는 리액트 v16.8 에 새로 도입된 기능으로서, 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 그리고 렌더링 직후 작업을 설정하는 useEffect 등의 기능등을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줍니다.

## 1. useState

- useState 는 가장 기본적인 Hook 으로서, 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줍니다.
- 만약에 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생한다면 이 Hook 을 사용하시면 됩니다.
- 하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState 를 여러번 사용하시면 됩니다.

## 2. useEffect

- useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다. 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태로 보아도 무방합니다.
- 만약 useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주시면 됩니다.
- useEffect 를 사용 할 때 특정 값이 변경이 될 때만 호출하게 하고 싶을 경우 useEffect 의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주시면 된답니다. 배열 안에는 useState 를 통해 관리하고 있는 상태를 넣어줘도 되고, props 로 전달받은 값을 넣어주어도 됩니다.
- useEffect 는 기본적으로 렌더링 되고난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라집니다. 만약 컴포넌트가 언마운트되기 전이나, 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect 에서 뒷정리(cleanup) 함수를 반환해주어야 합니다.
- useEffect 를 사용하실 때 주의하실 점이 있는데, useEffect 에 파라미터로 전달해주는 함수에서 async 를 사용하면 안됩니다. useEffect 에서는 뒷정리 함수를 반환해야 하는데, async 를 사용하게 되면 함수가 아닌 프로미스를 반환하기 때문에 오류가 발생하게 됩니다.

## 3. useContext

- 이 Hook 을 사용하면 함수형 컴포넌트에서 Context 를 보다 더 쉽게 사용 할 수 있습니다.
```javascript
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('black');
const ContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: '24px',
    height: '24px',
    background: theme
  };
  return <div style={style} />;
};

export default ContextSample;
```
```javascript
import React from 'react';
import ContextSample from './ContextSample';

const App = () => {
  return <ContextSample />;
};

export default App;
```

## 4. useReducer

- useReducer 는 useState 보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook 입니다.
- 리듀서는 현재 상태와, 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달 받아 새로운 상태를 반환하는 함수입니다. 리듀서 함수에서 새로운 상태를 만들 때는 꼭 불변성을 지켜주어야 합니다.
- Redux 에서는 액션 객체에는 어떤 액션인지 알려주는 type 필드가 꼭 있어야 하지만, useReducer 에서 사용하는 액션 객체는 꼭 type 를 지니고 있을 필요가 없습니다. 심지어, 객체가 아니라 문자열이나, 숫자여도 상관이 없습니다.
- useReducer 을 사용했을 때의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 점 입니다.

### 인풋 상태 관리하기

- useReducer 에서의 액션은 그 어떤 값이 되어도 됩니다. 그래서 이번에 우리는 이벤트 객체가 지니고있는 e.target 값 자체를 액션 값으로 사용하였습니다.

```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
```

## 5. useMemo

- useMemo 를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다. 먼저 리스트에 숫자들을 추가하면 해당 숫자들의 평균을 나타내는 함수형 컴포넌트를 작성해봅시다.

## 6. useCallback

- useCallback 은 useMemo와 상당히 비슷한 함수입니다.
- 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요, 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있습니다.
- 함수를 선언을 하게 되면 컴포넌트가 리렌더링 될 때마다 이 함수들이 새로 생성됩니다. 대부분의 경우에는 이러한 방식이 문제가 되지 않지만, 컴포넌트의 렌더링이 자주 발생하거나, 렌더링 해야 할 컴포넌트의 개수가 많아진다면 이 부분을 최적화 해주시는 것이 좋습니다.
- useCallback 의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고, 두번째 파라미터에는 배열을 넣어주면 되는데 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해주어야 하는지 명시해주어야 합니다.
- 함수 내부에서 기존의 상태 값을 의존해야 할 때는 꼭 두번째 파라미터 안에 포함을 시켜주어야 합니다. 
- useCallback 은 결국 useMemo 에서 함수를 반환하는 상황에서 더 편하게 사용 할 수 있는 Hook 입니다. 숫자, 문자열, 객체 처럼 일반 값을 재사용하기 위해서는 useMemo 를, 그리고 함수를 재사용 하기 위해서는 useCallback 을 사용하세요

## 7. useRef

- useRef Hook 은 함수형 컴포넌트에서 ref 를 쉽게 사용 할 수 있게 해줍니다.
- useRef 를 사용하여 ref 를 설정하면, useRef 를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가르키게 됩니다
- 추가적으로, 컴포넌트 로컬 변수를 사용해야 할 때도 useRef 를 활용 할 수 있습니다. 여기서 로컬 변수라 함은, 렌더링이랑은 관계 없이 바뀔 수 있는 값을 의미합니다.
- 주의 하실 점은, 이렇게 넣는 ref 안의 값은 바뀌어도 컴포넌트가 렌더링 되지 않는다는 점 입니다. 렌더링과 관련 되지 않은 값을 관리 할 때만 이러한 방식으로 코드를 작성해주세요.

## 8. 커스텀 Hooks 만들기

- 만약에 여러 컴포넌트에서 비슷한 기능을 공유하게 되는 일이 발생한다면 이를 우리들만의 Hook 을 작성하여 로직을 재사용 할 수 있습니다.

### 8.1 useInputs

```javascript
useInputs.js
import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = e => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```

### 8.2 usePromise

```javascript
// usePromise.js
import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    process();
  }, deps);

  return [loading, resolved, error];
}
```
```javascript
// UsePromiseSample.js
import React from 'react';
import usePromise from './usePromise';

const wait = () => {
  // 3초 후에 끝나는 프로미스를 반환
  return new Promise(resolve =>
    setTimeout(() => resolve('Hello hooks!'), 3000)
  );
};
const UsePromiseSample = () => {
  const [loading, resolved, error] = usePromise(wait, []);

  if (loading) return <div>로딩중..!</div>;
  if (error) return <div>에러 발생!</div>;
  if (!resolved) return null;

  return <div>{resolved}</div>;
};

export default UsePromiseSample;
```

## 9. 다른 Hooks

- https://nikgraf.github.io/react-hooks/
- https://github.com/rehooks/awesome-react-hooks

## 10. 정리

- 리액트에서 Hooks 패턴을 사용하면 클래스형 컴포넌트를 작성하지 않고도 대부분의 기능을 구현 할 수 있습니다. 이러한 기능이 리액트에 릴리즈 되었다고 해서 기존의 setState 를 사용하는 방식이 잘못 된 것이 아닙니다. 물론 useState 혹은 useReducer 를 통하여 구현 할 수 있다 하더라도 말이죠.
- 리액트 매뉴얼에 따르면 기존의 클래스형 컴포넌트는 앞으로도 계속해서 지원이 될 예정이니, 만약에 여러분들이 Hooks 가 불편하다고 느끼신다면 여러분의 취향에 따라 기존의 클래스형 컴포넌트 위주로 작성하셔도 무방합니다. 때문에, 만약에 기존에 작성하고 있던 리액트 프로젝트가 클래스형 컴포넌트를 사용하고 있다 하더라도 굳이 그것을 Hooks 를 사용하는 함수형 컴포넌트로 전환 할 필요는 없습니다. 다만 컴포넌트를 새로 만들게 될 때 Hooks 를 사용하여 해결 할 수 있다면 Hooks 를 사용하는게 상황에 따라 코드의 유지보수성과 가독성 측면에서 더 좋을 수도 있겠지요.

---

참조 : [리액트의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks)