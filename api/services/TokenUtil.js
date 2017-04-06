var jwt = require('jsonwebtoken');
const secretKey = 'awesome_secret_key';

createToken = function(data) {
  var tokenData = {
    data: data,
    created: Date.now(),
  }
  return jwt.sign(tokenData, secretKey);
}

module.exports = {
  createToken: createToken,
}
