const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  category: String,
  image: String,
  qty: { type: Number, default: 1 }
});

module.exports = mongoose.model("Product", productSchema);