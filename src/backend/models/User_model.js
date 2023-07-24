const mongoose = require("mongoose");

// Define the sub-schema for wishlist items
const WishlistItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  page: { type: Number, required: true },
  category: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
});

// Define the sub-schema for cart items
const CartItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  page: { type: Number, required: true },
  category: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Define the main schema for the User
const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: [WishlistItemSchema],
  cart: [CartItemSchema],
  count: {
    type: Number,
  },
  Total_amt: {
    type: Number,
  },
});

module.exports = mongoose.model("User", Schema);
