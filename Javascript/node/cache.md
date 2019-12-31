# cache

```javascript
import lruCache from "lru-cache";
const ssrCache = new lruCache({
  max: 100,
  maxAge: 1000 * 60
});
// ...
app.get("*", (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const cacheKey = parseUrl.path;
  if (ssrCache.has(cacheKey)) {
    console.log("캐시 사용");
    res.send(ssrCache.get(cacheKey));
    return;
  }
  // ... 
  ssrCache.set(cacheKey, result);
  res.send(result);
});
```
