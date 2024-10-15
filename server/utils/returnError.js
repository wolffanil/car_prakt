exports.Error = ({ res, errorMessage, status }) => {
  return res.status(status).json({
    status: "error",
    message: errorMessage,
  });
};
