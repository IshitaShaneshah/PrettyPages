const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    email: {
        type :String,
        required: true
    },        
    password: {
        type: String,
        required:true
    }
})



module.exports=mongoose.model("signup", Schema);