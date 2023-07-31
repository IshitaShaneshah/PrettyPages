const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  cartItems: 
    {
      products:{type:Object,required:true},
      count:{type:Number,default:1}
    }
  
});

module.exports = mongoose.model("Cart", CartItemSchema);
