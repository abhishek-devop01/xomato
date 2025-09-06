const foodPartnerModel = require("../models/foodPartner.model");
const jwt = require("jsonwebtoken");




async function authFoodPartnerMiddleware(req,res,next){
     const token = req.cookies.token;

     if(!token){
          return res.status(401).json({
               message: "Please login first"
          })
     }

     try{
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const foodPartner = await foodPartnerModel.findById(decoded.id)
          req.foodPartner = foodPartner;
          next()
     }catch(err){
          return res.status(401).json({
               message: "Unauthorized Access..."
          })
     }
}


module.exports = {
     authFoodPartnerMiddleware
}