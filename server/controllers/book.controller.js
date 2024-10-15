const { prisma } = require("../config/prismaConnect");
const catchAsync = require("../utils/catchAsync");
const { convertToISO } = require("../utils/convertDate");
const { Error } = require("../utils/returnError");

exports.create = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  const { carId, resorve_date } = req.body;

  const existBook = await prisma.book.findFirst({
    where: {
      carId: Number(carId),
      resorve_date: convertToISO(resorve_date),
      status: { not: "cancel" },
    },
  });

  if (existBook) {
    return Error({
      res,
      status: 400,
      errorMessage: "Бранирование на эту дату уже есть",
    });
  }

  const book = await prisma.book.create({
    data: {
      userId: Number(userId),
      carId: Number(carId),
      resorve_date: convertToISO(resorve_date),
    },
  });

  res.status(201).json({
    book,
  });
});

exports.getMy = catchAsync(async (req, res, next) => {
  const userId = req.user.id;

  const books = await prisma.book.findMany({
    where: {
      userId: Number(userId),
    },
    include: {
      car: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  res.status(200).json({
    books,
  });
});

exports.getAll = catchAsync(async (req, res, next) => {
  const books = await prisma.book.findMany({
    include: {
      car: true,
      user: {
        select: {
          id: true,
          fio: true,
          email: true,
          phone: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  res.status(200).json({
    books,
  });
});

exports.changeStatus = catchAsync(async (req, res, next) => {
  const { status } = req.body;
  const bookId = req.params.id;

  const existBook = await prisma.book.findFirst({
    where: {
      id: Number(bookId),
      status: "new",
    },
  });

  if (!existBook) {
    return Error({
      res,
      status: 404,
      errorMessage: "Бранирование не найденно",
    });
  }

  const book = await prisma.book.update({
    where: {
      id: Number(bookId),
      status: "new",
    },
    data: {
      status,
    },
  });

  res.status(200).json({
    book,
  });
});
