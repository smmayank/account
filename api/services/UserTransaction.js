
createUserData = function(data) {
  var email = data.email;
  if (!email) {
    return false;
  }
  var user = {
    email: email
  };
  return user;
}

createAccessData = function(user, data) {
  if (!user) {
    return false;
  }
  var accessType = data.accessType;
  var accessData = data.accessData;
  if (!accessType || !accessData) {
    return false;
  }
  return {
    type: accessType,
    data: accessData,
    user: user,
  }
}

/**
 * Creates user and access entry if success
 *
 * @param {number} input data containing user data and access data
 * @param {cb} callback that return  two parameters err and user
 */
createUser = function(data, cb) {
  var userData = createUserData(data);
  if (!userData) {
    return cb(new Error('User data missing'));
  }
  User.create(userData).exec(function(err, user) {
    if (err) {
      return cb(err);
    }
    if (!user) {
      return cb(new Error('User creatin failed'));
    }
    var accessData = createAccessData(user, data);
    if (!accessData) {
      return cb(new Error('Access data missing'));
    }
    Access.create(accessData).exec(function(err, access) {
      if (err || !access) {
        User.destroy({
          email: user.email
        }).exec(function(err) {
          if (err) {
            return cb(err);
          } else {
            return cb(new Error('create of access failed'));
          }
        })
      } else {
        return cb(false, user);
      }
    })
  });
}

module.exports = {
  createUser: createUser,
}
