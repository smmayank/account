var bcrypt = require('bcrypt');
const saltRounds = 10;

encryptPassword = function(password, cb) {
  bcrypt.hash(password, saltRounds).then(function(hash) {
    cb(hash);
  }).catch(function(err) {
    cb();
  })
}

comparePassword = function(password, hash, cb) {
  bcrypt.compare(password, hash).then(function(res) {
    cb(res);
  }).catch(function(err) {
    cb(false);
  });
}

module.exports = {
  encryptPassword: encryptPassword,
  comparePassword: comparePassword,
}
