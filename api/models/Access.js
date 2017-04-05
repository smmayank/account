/**
 * Access.js
 *
 * @description :: User access table, contains data about user access.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    type: {
      type: 'string',
      required: true,
      enum: AccessUtil.accessTypes
    },
    data: {
      type: 'string',
      required: true,
    },
    user: {
      model: 'user',
    }
  }
};
