# interface와 type

- interface가 어디에서나 사용되는 새 이름을 만든다는 것입니다.
- type 별칭으로는 새 이름을 만들 수 없습니다.

- 현재 시점에서는 위 코드의 interfaced와 aliased 모두 새로운 이름이 생성된다.
- 두 번째로 중요한 차이점은 type 별칭은 extends/implements에 사용될 수 없고, 이를 사용 할 수도 없다는 점입니다.
- 소프트웨어의 이상적인 특성은 확장할 수 있도록 열려있는 것이기 때문에 가능한 경우 type 별칭 대신 interface를 사용해야 합니다.

- 현재 시점에서는 변경되었으며 type 정의 안에 union이 사용된 경우를 제외하고 extends, implements 모두 interface와 같이 동작한다.
- 반대로, interface로는 모양을 표현할 수 없는 경우와 union 혹은 tuple 타입이 필요한 경우, 보통 type 별칭을 사용합니다.

## Interface의 Declaration Merging이 가장 큰 차이이다

- interface는 같은 이름으로 여러 번 선언을 해도 컴파일 시점에서 합쳐지기 때문에 확장성이 좋다. 따라서 일반적으로는 interface를 사용하고 union, tuple 등이 필요한 경우에만 type 별칭을 사용하라는 TypeScript Handbook의 내용은 현재에도 유효하다.
- declaration merging으로 확장할 수 있기 때문에, 외부에 노출해야 하는 public API에 사용되는 타입은 항상 interface를 사용하여 작성해야 한다.
- type 별칭으로 작성된 타입은 조금 더 제한적이기 때문에 private API같이 외부에 노출할 필요가 없는 경우에 사용하는 것이 좋다.

## React Component의 Props와 State의 타입을 기술하려면 어떤 것이 좋을까?

- 일반적으로는 interface를 사용해도 무리가 없다.
- React component를 사용하는데 declaration merging이나 implements는 필요 없다.
- interface는 union이 사용되었다면 extends 할 수 없기 때문에 해당 경우에는 type 별칭을 사용해서 타입을 기술해야 한다.
