var jwt = require('jsonwebtoken');
const secretKey = 'awesome_secret_key';
const tokenOptions = {
  expiresIn: '1d'
}

createToken = function(userId, deviceId, cb) {
  var tokenData = {
    userId: userId,
    deviceId: deviceId,
    issued: Date.now(),
  };
  var token = jwt.sign(tokenData, secretKey, tokenOptions);
  Redis.setValue(token, tokenData, function(err, result) {
    if (err || !result) {
      return cb(err)
    }
    return cb(false, token);
  });
}

module.exports = {
  createToken: createToken,
}
