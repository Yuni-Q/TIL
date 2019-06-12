# React Hooks

## useState()

- FC state 사용

## useEffect

- 렌더링 할 때마다
- 두번째 인자로 내가 원하는 state를 등록해서 사용, 그렇지 않으면 모든 state에 대해서 동작
- 두번째 인자로 빈 배열을 주면 처음 한번만 작동한다. 관찰해야 할 것이 없기 때문에

## useContext

- contextAPI 활용이 더욱 간단해 진다.

## useRef

- 좋다...
- onChange 대신 쓰면 좋을거 같다.
- 정말 효율적인지는 생각해보고 다른 부분에서 많이 쓰일 수 있을거 같다.

## useReducer

- 리듀서 짱 !!!

## useEffect에서 didMount 제외하는 방법

```javascript
const App = () => {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // didUpdate
    }
  });
  return <div>Hello world</div>;
};
```
