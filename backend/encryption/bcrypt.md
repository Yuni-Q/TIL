
# bcrypt
```javascript
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "111111";
const someOtherPlaintextPassword = "111112";
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  console.log(hash);
  bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    console.log("my password", result);
  });
  bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    console.log("other password", result);
  });
});
```
