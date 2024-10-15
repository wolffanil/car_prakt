const catchAsync = require("../utils/catchAsync");
const { Error } = require("../utils/returnError");

exports.onlyAdmin = catchAsync(async (req, res, next) => {
  const user = req.user;

  if (user?.role !== "admin") {
    return Error({
      res,
      status: 403,
      errorMessage: "Этот маршрут только для админов",
    });
  }

  next();
});
