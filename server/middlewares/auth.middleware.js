const catchAsync = require("../utils/catchAsync");
const { Error } = require("../utils/returnError");
const jwt = require("jsonwebtoken");

exports.protect = catchAsync(async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  const accessToken = authorizationHeader?.split(" ")[1];

  if (!accessToken) {
    return Error({
      res,
      status: 401,
      errorMessage:
        "Вы не авторизованы! Пожалуйста, войдите, чтобы получить доступ. ",
    });
  }

  const userData = await jwt.verify(accessToken, process.env.JWT_SECRET);

  if (!userData) {
    return Error({
      res,
      status: 401,
      errorMessage:
        "Вы не авторизованы! Пожалуйста, войдите, чтобы получить доступ. ",
    });
  }

  req.user = { ...userData };

  next();
});
