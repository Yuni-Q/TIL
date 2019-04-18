# ReactRoute
- 라우팅 : 다른 주소에 따라 다른 뷰를 보여주는 것
- SPA : Single Page Application 말 그대로, 페이지가 1개인 어플리케이션

```javascript
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateTodo from './CreateTodo';
import Login from './Login';
import Signup from './Signup';
import Todos from './Todos';

function App() {
  // window.localStorage.setItem('token', '11');
  // window.localStorage.removeItem('token');
  return (
    <Router>
      <>
        <Route exact path="/" component={Todos} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/createTodo" component={CreateTodo} />
        {/* <Route component={Login}/> */}
      </>
    </Router>
  );
}

export default App;
```

- <React Router>을 사용하기 위해 다음과 같이 import 해준다. as 를 이용하여 Router 라는 이름으로 쓸것이다.
- 감싸주어야 어디서든 <Route> 를 쓸 수 있다.

- switch 문을 생각하면 된다. 위-아래 순서로 각각 url에 해당되는 것을 찾으면 그 컴포넌트를 그려주고 빠져나온다.

- 각각ex) path="url" 즉 url이 무엇인지에 따라 ex) component={Home}해당 컴포넌트를 그려준다.

- 21번 라인 : exact 또는 exact={true} 는 / 가 포함된 url이 아니라 정확히/ 로 들어왔을 때만 해당 컴포넌트를 그려주게 해주는 것이다. 이것을 안해주면 /about /posts 등등 다른 url에서도 / 을 포함하고 있기 때문에 의도치 않게 함께 그려지는 것을 방지해야 한다.

## URL 이동시키기
- Link : a 태그와 같다. 하지만 SPA 특성상 a태그 처럼 새로고침이 발생하면 안되기에, a 태그를 기반으로 기능상의 개선을 통해 새로고침없이 다른 뷰를 렌더 하기위해 사용하는 것이다.

- history.push : Route는 컴포넌트에 기본적으로 match, history, location 이라는 것을 넘겨준다. 이때 histroy.push(‘/인자’) 함수에 인자를 넣어주면 해당 인자로 url을 새로고침 없이 이동시켜준다.

## history
- 브라우저의 window.history 와 유사
- 주소를 임의로 변경하거나 되돌아 갈 수 있도록 한다.
- 주소 변경시, SPA 특성을 지키기 위해 페이지 전체를 리로드 하지 않는다.
- location 이 포함되어 있다.

## location
- 브라우저의 window.location 와 유사
- 현재 페이지 정보를 지니고 있다.
- url의 query 정보를 search라는 프로퍼티에 가지고 있다.

## match
- Route의 path에 정의한 것과 매칭된 정보를 가지고 있다.
- params 에 설정한 파라미터를 담고 있다.
