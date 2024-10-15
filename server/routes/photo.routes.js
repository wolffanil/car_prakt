const express = require("express");
const { protect } = require("../middlewares/auth.middleware");
const { onlyAdmin } = require("../middlewares/admin.middleware");
const { uploadPhoto, resizePhoto } = require("../controllers/photo.contoller");

const router = express.Router();

router.use(protect, onlyAdmin);

router.route("/uploadPhoto").post(uploadPhoto, resizePhoto);

module.exports = router;
