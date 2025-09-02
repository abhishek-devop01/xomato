const mongoose = require('mongoose')



function connectDB(){
     mongoose.connect(process.env.MONGODB_URL )
     .then(()=>{
          console.log("DB is connected");
          
     })
     .catch((err)=>{
          console.log("DB connection Error: ", err);
          
     })
}

module.exports = connectDB