# interface와 type

- interface가 어디에서나 사용되는 새 이름을 만든다는 것입니다.
- type 별칭으로는 새 이름을 만들 수 없습니다.

- 현재 시점에서는 위 코드의 interfaced와 aliased 모두 새로운 이름이 생성된다.
- 두 번째로 중요한 차이점은 type 별칭은 extends/implements에 사용될 수 없고, 이를 사용 할 수도 없다는 점입니다.
- 소프트웨어의 이상적인 특성은 확장할 수 있도록 열려있는 것이기 때문에 가능한 경우 type 별칭 대신 interface를 사용해야 합니다.

- 현재 시점에서는 변경되었으며 type 정의 안에 union이 사용된 경우를 제외하고 extends, implements 모두 interface와 같이 동작한다.
- 반대로, interface로는 모양을 표현할 수 없는 경우와 union 혹은 tuple 타입이 필요한 경우, 보통 type 별칭을 사용합니다.
