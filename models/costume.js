const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {
    type: String,
    maxlength: 10,
    minlength: 05
},  
 cost: {
    type: Number,
    min: 20,
   max: 700
} 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema)