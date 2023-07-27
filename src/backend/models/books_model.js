const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  author_name: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  sub_genre: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  vendor_mail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Books", Schema);
