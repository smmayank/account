/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to validate basic params {device_id}
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  const params = req.allParams();
  var deviceId = params.device_id;
  if (!deviceId) {
    return res.badRequest('device_id is missing');
  }
  req.deviceId = deviceId;
  next();
};
