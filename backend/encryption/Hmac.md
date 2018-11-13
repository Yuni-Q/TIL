
# Hmac
```javascript
var hmac = crypto.createHmac('sha256','password');
var pass = hmac.update('평문').digest('hex');
```
