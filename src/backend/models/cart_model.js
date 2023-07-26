const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  cart: { type: Array, required: true },
});

module.exports = mongoose.model("Cart", CartItemSchema);
