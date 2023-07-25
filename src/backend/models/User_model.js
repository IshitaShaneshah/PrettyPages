const mongoose = require("mongoose");

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
  count: {
    type: Number,
  },
  Total_amt: {
    type: Number,
  },
});

module.exports = mongoose.model("User", Schema);
