const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
//   image: { type: String, required: true },
  page: { type: Number, required: true },
  category: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Cart", CartItemSchema);
