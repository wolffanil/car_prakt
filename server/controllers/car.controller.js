const { prisma } = require("../config/prismaConnect");
const catchAsync = require("../utils/catchAsync");

exports.getAll = catchAsync(async (req, res, next) => {
  const cars = await prisma.car.findMany({
    orderBy: {
      id: "desc",
    },
  });

  res.status(200).json({
    cars,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const { name, image, description } = req.body;

  const car = await prisma.car.create({
    data: {
      image,
      name,
      description,
    },
  });

  res.status(201).json({
    car,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const carId = req.params.id;
  const { name, image, description } = req.body;

  const car = await prisma.car.update({
    where: {
      id: Number(carId),
    },
    data: {
      image,
      name,
      description,
    },
  });

  res.status(200).json({
    car,
  });
});

exports.getById = catchAsync(async (req, res, next) => {
  const carId = req.params.id;

  const car = await prisma.car.findUnique({
    where: {
      id: Number(carId),
    },
  });

  res.status(200).json({
    car,
  });
});

exports.deleteCar = catchAsync(async (req, res, next) => {
  const carId = req.params.id;

  await prisma.car.delete({
    where: {
      id: Number(carId),
    },
  });

  res.status(204).json({
    message: "машина успешно удалена",
  });
});
