const express = require('express')
const router = express.Router();

// GET /api/food/food-partner/:id

router.get("/:id",
  authMiddleware.authUserMiddleware,
  foodController.getFoodPartnerById
)


module.exports = router