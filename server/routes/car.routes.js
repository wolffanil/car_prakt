const express = require("express");
const {
  getAll,
  create,
  update,
  deleteCar,
  getById,
} = require("../controllers/car.controller");
const { protect } = require("../middlewares/auth.middleware");
const { onlyAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.use(protect, onlyAdmin);

router.post("/", create);

router.route("/:id").patch(update).delete(deleteCar);

module.exports = router;
