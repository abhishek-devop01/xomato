const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");
const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});
// post /api/food [protected]
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

//  GET /api/food/ [protected]

router.get("/", authMiddleware.authUserMiddleware, foodController.getFoodItems)

module.exports = router;
