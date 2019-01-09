const crypto = require('crypto');

const c = crypto.randomBytes(32, function (err, buffer) {
  const token = buffer.toString('hex');
  console.log(token);
});
console.log(c);