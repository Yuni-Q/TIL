
# update

```javascript
const { id } = req.params;
const {
  email,
  password,
  age,
} = req.body;
const notNull = {};
Object.keys(req.body).forEach(key => {
  if (req.body[key] !== null) {
    notNull[key] = req.body[key];
  }
Users.update({..args}, { where: { id })
});
```