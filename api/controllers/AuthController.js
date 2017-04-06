/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signUp: function(req, res) {
    var user = req.user;
    UserTransaction.createUser(user, function(err, user) {
      if (err || !user) {
        return res.badRequest(err);
      }
      var auth_token = TokenUtil.createToken(user);
      return res.ok({
        auth_token: auth_token,
      });
    });
  },
};
