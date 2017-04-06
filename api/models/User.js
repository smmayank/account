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
      primaryKey: true,
    },
    email: {
      type: 'email',
      required: true,
      unique: true,
    },
    status: {
      type: 'string',
      required: true,
      enum: ['unverified', 'verified', 'disabled'],
      defaultsTo: 'unverified',
    },
    accesses: {
      collection: 'access',
      via: 'user'
    }
  },
  beforeCreate: function(user, cb) {
    user.uuid = uuid();
    cb();
  }
};
