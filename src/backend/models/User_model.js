const mongoose = require("mongoose");
const book = require("../models/books_model")

// Define the sub-schema for wishlist items
const WishlistItemSchema = new mongoose.Schema({
    // book: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Book",
    //     required: true,
    //   },
    //   addedOn: {
    //     type: Date,
    //     default: Date.now,
    //   },
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  page: { type: Number, required: true },
  category: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
});

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
  wishlist: [WishlistItemSchema], // Embed the sub-schema in the wishlist field
  cart: [CartItemSchema],
});

module.exports = mongoose.model("User", Schema);
