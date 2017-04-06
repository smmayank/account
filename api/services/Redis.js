var redis = require('redis');
var redisClient = redis.createClient();

redisClient.on('error', function(err) {
  sails.log.error(err);
})

setValue = function(key, value, cb) {
  redisClient.set(key, value, function(err, reply) {
    if (err) {
      return cb(err);
    }
    if (!reply) {
      return cb(new Error('No reply'));
    }
    return cb(false, true);
  });
}

module.exports = {
  setValue: setValue,
}
