/*jshint esversion:6*/
const notFound = (request, response, next) => {
  response.status(404).json({
    message: "These are not the droids you are looking for"
  });
};

module.exports = notFound;
