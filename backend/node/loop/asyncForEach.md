
# forEach를 async하게 사용하려면 ??
```javascript
const _ = require('lodash');
const Aigle = require('aigle');

router.get('/', async (req, res) => {
  Aigle.mixin(_);

  const itmes = [1,2,3,4,5]

  const result = {};
  result.items = [];
  
  await Aigle.forEach(itmes, async (item) => {
    result.push(item);
  });
  
  res.json{result}
```

