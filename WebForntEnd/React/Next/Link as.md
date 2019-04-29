# Link as
```jsx
import Link from 'next/link';
 export default props => (
  <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`} >
    <a>{props.title}</a>
  </Link>
);
```

 ```javascript
server.get("post/:title", (req, res) => {
  const actualPage = "/post"
  const queryParams = { title: req.params.title };
  app.render(req, res, actualPage, queryParams);
});
```