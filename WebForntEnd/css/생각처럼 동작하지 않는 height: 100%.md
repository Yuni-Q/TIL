# 생각처럼 동작하지 않는 height: 100%

- width: auto; 요소의 부모 크기 기준으로 가득찬다.
- height: auto; 요소의 자식 기준으로 자동 조절 된다.

```css
body {
  margin: 0;
  border: 10px solid blue;
}

.cover {
  background-image: url(images/cover.png);
  height: 100%;
}
```

- body의 height는 자식 요소인 .cover의 높이를 .cover는 부모 요소인 body의 높이를 참조 하기 때문에 제대로 작동 하지 않는다.

```css
body {
  margin: 0;
  border: 10px solid blue;
}

html,
body {
  height: 100%;
}

.cover {
  background-image: url(images/cover.png);
  height: 100%;
}
```

- html, body 모두에 height: 100%를 주면 해결 할 수 있다.
- 위의 방법은 old한 방법으로 100vh를 사용해도 된다(IE9부터 부분 지원 가능)
  - vh : viewport height

## 비율에 맞는 높이 지정하기

- padding-top을 쓰면 witdh의 비율에 따른 높이를 구할 수 있다.
