# shallow와 popstate

- Next.js에서 라우팅할 때 shallow 옵션을 주면 getInitialProps가 불리지 않는다. 성능 최적화를 위해 지원하는 기능으로 이해하고 있다. 예를 들어, /home 페이지에서 이벤트 탭을 눌렀을 때, /home?tab=event 와 같이 url만 변경하고 굳이 getInitialProps 함수를 호출할 필요가 없을 때 사용할 수 있다.
- 문제는 입력했던 shallow 옵션이 popstate에서도 그대로 적용된다는 것이다. 우리 프로젝트에서는 /home?tab=event 페이지에서 다른 페이지로 갔다가 뒤로가기로 돌아올 때 getInitialProps 함수가 호출되어야 하는데 호출되지 않아서 문제가 됐었다. 이 경우에는 popstate 이벤트를 받아서 shallow 옵션을 꺼줘야한다. 개인적으로는 shallow 옵션이 살아있는 게 비정상적인 동작으로 보인다.
