const bcrypt = require("bcryptjs");
const { prisma } = require("../config/prismaConnect");
const catchAsync = require("../utils/catchAsync");
const { Error } = require("../utils/returnError");
const jwt = require("jsonwebtoken");

exports.register = catchAsync(async (req, res, next) => {
  const { fio, phone, email, password, driverLicense } = req.body;

  const existUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existUser) {
    return Error({
      res,
      status: 400,
      errorMessage: "Пользователь с такой почтой уже есть",
    });
  }

  const user = await prisma.user.create({
    data: {
      fio,
      phone,
      email,
      password: await bcrypt.hash(password, 10),
      driverLicense,
    },
  });

  const accessToken = await jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  user.password = undefined;

  res.status(200).json({
    user,
    accessToken,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return Error({
      res,
      status: 404,
      errorMessage: "Неверный email или пароль",
    });
  }

  const accessToken = await jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  user.password = undefined;

  res.status(200).json({
    user,
    accessToken,
  });
});

exports.refresh = catchAsync(async (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  const token = authorizationHeader?.split(" ")[1];

  const userData = await jwt.verify(token, process.env.JWT_SECRET);

  const userId = userData?.id;

  if (!userId) {
    return Error({
      res,
      status: 401,
      errorMessage: "Вы не авторизованы",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });

  const accessToken = await jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  user.password = undefined;

  res.status(200).json({
    user,
    accessToken,
  });
});
