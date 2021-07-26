const fallback = function fallback(error, req, res, next) {
  if (res.headersSent) return next(error);
  console.log(`Error: ${error}`);

  let status;
  switch (error.name) {
    case "MongoError":
      status = 400;
      break;
    case "ValidationError":
      status = 400;
      break;
    default:
      status = error.status || 500;
      break;
  }

  req.error = {
    statusCode: status,
    error,
    message: error.message
  }

  return res.status(status).json(req.error);
}

module.exports = { fallback }