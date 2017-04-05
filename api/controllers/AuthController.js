/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  signUp: function(req, res) {
    var user = req.user;
    sails.log.debug('User is %j', user);
    res.ok();
  },
};
