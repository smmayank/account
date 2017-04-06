var redis = require('redis');
const redisUrl = process.env.REDIS_URL | '127.0.0.1:6379';
var redisClient = redis.createClient(redisUrl);

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
