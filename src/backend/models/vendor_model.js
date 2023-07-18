const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
  // products: {
  //   type: String,
  //   required: false,
  // }
});

module.exports = mongoose.model("Vendor", Schema);