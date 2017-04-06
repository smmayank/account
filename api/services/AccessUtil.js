const accessTypePassword = 'password';

accessTypes = [accessTypePassword];

isDefinedAccess = function(accessType) {
  accessTypes = this.accessTypes;
  return -1 !== accessTypes.indexOf(accessType);
}

processAccess = function(accessType, accessData, cb) {
  if (accessTypePassword === accessType) {
    Password.encryptPassword(accessData, cb);
  }
}

module.exports = {
  accessTypes: accessTypes,
  isDefinedAccess: isDefinedAccess,
  processAccess: processAccess,
}
