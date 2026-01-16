const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  image: String,
  category: String,
  countInStock: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

// Prevent OverwriteModel Error
module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);
