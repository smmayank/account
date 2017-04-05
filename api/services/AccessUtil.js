accessTypes = ['password'];

isDefinedAccess = function(accessType) {
  accessTypes = this.accessTypes;
  return -1 !== accessTypes.indexOf(accessType);
}

module.exports = {
  accessTypes: accessTypes,
  isDefinedAccess: isDefinedAccess,
}
