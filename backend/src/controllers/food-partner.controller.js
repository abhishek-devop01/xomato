const foodPartnerModel = require("../models/foodPartner.model")
const foodModel = require('../models/food.model')


async function getFoodPartnerById(req, res){
     const foodPartnerId = req.params.id;


     const foodPartner = await foodPartnerModel.findById(foodPartnerId)
     const foodItemsByFoodPartner = await foodModel.find({
          foodPartner: foodPartnerId
     })

     if(!foodPartner){
          return res.status(404).json({
               message: "Food partner not found"
          })
     }

     res.status(200).json({
          message: "food found",
          foodPartner:{
               ...foodPartner.toObject(),
               foodItems: foodItemsByFoodPartner
          }
     });
}


module.exports = getFoodPartnerById