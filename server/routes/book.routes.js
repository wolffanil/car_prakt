const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const {
  getMy,
  create,
  changeStatus,
  getAll,
} = require("../controllers/book.controller");
const { onlyAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();

router.use(protect);

router.get("/get-my", getMy);

router.post("/", create);

router.use(onlyAdmin);

router.get("/", getAll);

router.patch("/:id", changeStatus);

module.exports = router;
