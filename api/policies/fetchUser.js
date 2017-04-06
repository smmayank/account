/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to parse params for user
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
  const params = req.allParams();
  var email = params.email;
  var accessType = params.access_type;
  var accessData = params.access_data;
  if (!email) {
    return res.badRequest('email is missing');
  }
  if (!accessType) {
    return res.badRequest('access_type is missing');
  }
  if (!AccessUtil.isDefinedAccess(accessType)) {
    return res.badRequest({
      err: 'access_type is invalied',
      allowed: AccessUtil.accessTypes
    });
  }
  if (!accessData) {
    return res.badRequest('access_data is missing');
  }
  AccessUtil.processAccess(accessType, accessData, function(processedData) {
    if (!processedData) {
      return res.badRequest('access_data is invalid');
    }
    req.user = {
      email: email,
      accessType: accessType,
      accessData: processedData,
    };
    next();
  });
};
