
# Jest를 이용한 React 단위 테스트
- .not : 이어지는 체인의 비교를 반대로 만든다.
- expect(OBJECT).toBe(value) : 자바스크립트 일치 연산자(===)를 사용했을 때 값이 동일할 것을 예상한다(값뿐만 아니라 타입도 비교한다)
- expect(OBJECT).toEqual(value) : 값을 비교(deep-equal)했을 때 동일할 것을 예상한다.
- expect(OBJECT).toBeFalsy() : 값이 거짓일 것으로 예상한다.
- expect(OBJECT).toBetruthy() : 값이 참일 것으로 예상한다.
- expect(OBJECT).toBeNull : 값이 null일 것으로 예상한다.
- expect(OBJECT).toBeUndefined() : 값이 정의되지 않을 것으로 예상한다.
- expect(OBJECT).toBeDefined() : 값이 정의될 것으로 예상한다.
- expect(OBJECT).toMatch(regexp) : 값이 정규표현식에 일치할 것으로 예상한다.

## Javascirpt에서 공식적인 정의에 의한 거짓
- false
- 0
- "(공백 문자열)
- null
- undefiend
- NaN(Not a Number : 숫자가 아님)

## TestUtils
- scryRenderedDOMComponentsWithTag() : 다수의 엘리먼트. 태그명을 아는 경우에 사용한다.
- findRenderedDOMComponentWIthTag() : 단일 엘리먼트. 고유한 태그명을 아는 경우에 사용한다. 컴포넌트의 다른 엘리먼트에서 해당 태그명을 사용하지 않는 경우다.
- scryRenderedDOMComponentsWithClass() : 다수의 엘리먼트. 클래스명을 아는 경우에 사용한다.
- findRenderedDOMComponentWIthClass() : 단일 앨리먼트. 고유한 클래스명을 아는 경우에 사용한다.
- scryRenderedDOMComponentsWithType() : 다수의 엘리먼트. 유형을 아는 경우에 사용한다.
- findRenderedDOMComponentWIthType() : 단일 엘리먼트. 유형을 아는 경우에 사용한다.
