
# Crypto 사용
```javascript
var crypto = require('crypto')

// 1. Cipher 암호화
var cipher = crypto.createCipher('ase256', 'password');
cipher.update('평서문','ascii','hex');
var cipherd = cipher.final('hex');

// 1.1 Cipher 복호화
var decipher = crypto.createDecipher('ase256', 'password');
decipher.update('평서문','ascii','hex');
var decipherd = decipher.final('hex');
```
