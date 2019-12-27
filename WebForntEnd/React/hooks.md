# hooks

- 최상위에 작성해 주는 것이 좋다.
- hooks는 조건문 안에 넣으면 안된다
- 함수나 반복문에도 넣지 않는 것이 좋다.

## useState

- this.state 대신 사용

## useEffect

- 특정 값이 바뀔 때 실행된다.
- componentDidmount에서 실행 안 시키기

```jsx
const mounted = useRef(false);
useEffect(()=> {
  if(!mounted.current) {
    mounted.current = true;
  } else {
    // componentDidUpdate
  }
}, [추적할 값])
```

## useRef

- 특정 값 저장할 때 사용
- 2번째 배열안에 값을 활용하여 값을 수정할 타이밍을 잘 잡아야 한다

## useMemo

- 특정 함수의 리턴 값 저장할 때 사용
- 2번째 배열안에 값을 활용하여 값을 수정할 타이밍을 잘 잡아야 한다

## useCallback

- 특정 함수 저장할 때 사용
- 2번째 배열안에 값을 활용하여 값을 수정할 타이밍을 잘 잡아야 한다
- 자식으로 함수를 내려 줄 경우에는 반드시 사용해야 한다.

## 부모 컴포넌트에서 접근 가능한 함수 구현하기 : useImperativeHandle

```jsx
import React, { forwardRef, useState, useImperativeHandle} from 'react'l

function Profile(props, ref) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useImperativeHandle(ref, () => ({
    addAge: value => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      {/* ... */ }
    </div>
  );
}

export default forwardRef(Profile);

function Parent() {
  const profileRef = useRef();
  const onClick = () => {
    if(profileRef.current) {
      console.log('current name length: ', profileRef.current.getNameLength());
      profileRef.current.addAge(5);
    }
  };
  return (
    <div>
      <Profile ref={profileRef} />
      <button onClick={onClick}>add age 5</button>
    </div>
  );
}
```

## useLayoutEffect

- useEffect 훅에 입력된 함수는 렌더링 결과가 돔에 반영된 후 비동기로 호출된다.
- useLayoutEffect 훅은 useEffect 훅과 거의 비슷하게 동작하지만 동기로 호출된다는 점이 다르다.
- 특별한 이유가 없다면 useEffect 훅을 사용하는 것이 성능상 이점이 있다.

## useDebugValue

- useDebugValue는 개발 편의를 위해 제공되는 훅이다.
- useDebugValue 훅을 사용하면 커스텀 훅의 내부 상태를 관찰 할 수 있기 때문에 디버깅에 도움이 된다.

```jsx
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue(!value);
  useDebugValue(value ? "on" : "off");
  return [value, onToggle];
}
```

## constructor

```jsx
function Profile({ firstName, lastName }) {
  const [name, setName] = useState(`${firstName} ${lastName}`);
  const isFirstRef = useRef(true);
  if (isFirstRef.current) {
    isFirstRef.current = false;
    callApi();
  }
  // ...
}
```

### useOnFirstRender 커스텀 훅

```jsx
function useOnFirstRender(func) {
  const isFirstRef = useRef(true);
  if (isFirstRef.current) {
    isFirstRef.current = false;
    func();
  }
}

function Profile({ firstName, lastName }) {
  const [name, setName] = useState(`${firstName} ${lastName}`);
  useOnFirstRender(callApi);
  // ...
}
```

## componentDidUpdate

```jsx
function Profile(props) {
  const [name, setName] = useState(props.name);
  const prevUserId = usePrevious(props.userId);
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      if (prevUserId !== props.userId) {
        setName(props.name);
      }
    } else {
      isMountedRef.current = true;
    }
  });
}
```

### usePrevious 커스텀 훅

```jsx
function usePrevious(value) {
  const valueRef = useRef();
  useEffect(() => {
    valueRef.current = value;
  }, [value]);
  return valueRef.current;
}
```

### useOnUpdate

```jsx
function useOnUpdate(func) {
  const inMountedRef = useRef(false);
  useEffect(() => {
    if (isMountedRef.current) {
      func();
    } else {
      isMountedRef.current = true;
    }
  });
}
```

## getDerivedStateFromProps

```jsx
function SpeedIndicator({ speed }) {
  const [isFaster, setIsFaster] = useState(false);
  const [prevSpeed, setPrevSpeed] = useState(0);
  if (speed !== prevSpeed) {
    setIsFaster(speed > prevSpeed);
    setPrevSpeed(spped);
  }
  return <p>It's getting faster: {isFaster ? "yes" : "no"}</p>;
}
```

## forceUpdate

```jsx
function MyComponent() {
  const [_, forceUpdate] = useReducer(s => s + 1, 0);
  function onClick() {
    forceUpdate();
  }
  // ...
}
```

## useDebounce

```jsx
function useDebounce({ callback, ms, args }) {
  useEffect(() => {
    const id = setTimeout(callback, ms);
    return () => clearTimeout(id);
  }, args);
}

function Profile() {
  let [name, setName] = useState("");
  let [nameTemp, setNameTemp] = useState("");
  useDebounce({
    callback: () => setName(nameTemp),
    ms: 1000,
    args: [nameTemp]
  });
  return (
    <div>
      <p>{name}</p>
      <input type="text" onChange={e => setNameTemp(e.currentTarget.value)} />
    </div>
  );
}
```
