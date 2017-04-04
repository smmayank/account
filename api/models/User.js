/**
 * User.js
 *
 * @description :: User table contain user account details
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const uuid = require('uuid/v4');

module.exports = {
  attributes: {
    uuid: {
      type: 'string',
      unique: true,
    },
    email: {
      type: 'email',
      required: true,
      unique: true,
    }
  },
  beforeCreate: function(user, cb) {
    sails.log.debug('beforeValidate user: ', user);
    user.uuid = uuid();
    cb();
  }
};
