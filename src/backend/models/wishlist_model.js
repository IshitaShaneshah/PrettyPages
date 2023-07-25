const mongoose = require("mongoose");
// Define the sub-schema for wishlist items
const WishlistItemSchema = new mongoose.Schema({
  user_id: { type: String, required: true},
  wishList: {type: Array, required: true}
});

module.exports = mongoose.model("Wishlist", WishlistItemSchema);
