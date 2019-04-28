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
useEffect(()=> { // componentDidmount, componentDidUpdate
  return () => { // componentWillUnmount

  }
}, [id])
```
- 두번째 인수에 참조할 값을 넣는다.
- 빈 배열의 경우 componentDidmount의 기능만 수행
- componentDidUpdate와 다르게 useEffect로 분리해서 분기문이 아니라 여러개 사용 가능
- uselayoutEffect : 화면 바뀌는 것을 감지(변겨이 있을 때 모두 변경되기 전에)
- class의 lifecycle과 useEffect의 관리 포인트는 교차이다(useEffect는 사용에 따라 유용하게 사용 가능)
