
# GraphQL을 이용한 데이터 다루기
- GraphQL은 프론트엔드에 데이터를 제공하는 우수하고 믿을 수 있는 방법이다. 또한, 중복된 백엔드 코드도 많이 제거한다.
- React Router에서 브라우저 히스토리를 활성화하고 해시(#)가 없는 URL을 사용하려면 Express 라우팅 경로의 *(별표에서) sendFile()을 이용해 index.html을 전달하도록 해야 한다.
- Express를 데이터 제공자 또는 API뿐만 아니라 정적 자원을 위한 웹 서버로 사용하려면 app.use()에서 express.static 미들웨어를 추가한다.
- GraphQL의 URL 구조는 /q?query=...이며, 여기서 query는 데이터 쿼리 값이다.

## 퀴즈
- GraphQL 스키마를 생성하는 명령은 new graphql.GraphQLSchema()이다.
- API 요청을 리듀서에 처리하는 것을 피해야 한다. 컴포넌트에서 처리하는 것이 낫다(더 정확하게는 컨테이너 컴포넌트에서 처리한다)
- GraphQL 호출을 실행하는 위치로 적절한 곳은 componentWillMount()이다. componentDidMount()에서 처리하는 것도 괜찮다.
- GraphQL에서 URL로 `q?query={query}`를 사용했다. 이 문법을 템플릿 리터럴(문자열 템플릿, 문자열 보간)이라고 한다.
- GraphQLString은 특별한 GraphQL 스키마 유형으로 graphql 패키지에서 볼러올 수 있는 클래스이다.