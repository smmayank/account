generateResponse = function(status, message, data, err) {
  var response = {};
  response.status = status;
  if (message) {
    response.message = message;
  }
  if (data) {
    response.data = data;
  }
  if (err) {
    response.err = err;
  }
  return response;
};

module.exports = {
  generateResponse: generateResponse,
}
