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



