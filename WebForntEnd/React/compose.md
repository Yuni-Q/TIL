# compose(리덕스)

- 리덕스는 여러 함수를 한 함수로 합성해 주는 compose 함수를 제공한다.

- compose 함수는 왼쪽에서 오른쪽이 아니라 오르쪽에서 왼쪽으로 함수를 합성한다(일반 compose와 다르다)

- ((compose(f,g)(x) = f(g(x)))
