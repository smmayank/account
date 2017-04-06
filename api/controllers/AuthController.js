/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signUp: function(req, res) {
    var user = req.user;
    UserTransaction.createUser(user, function(err, created) {
      if (err || !created) {
        return res.badRequest(err);
      }
      TokenUtil.createToken(created.uuid, req.deviceId, function(err, token) {
        if (err) {
          return res.badRequest(err);
        }
        return res.ok({
          auth_token: token,
        });
      });
    });
  },
};
