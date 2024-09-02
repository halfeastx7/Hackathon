// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
  },
});

const Product = mongoose.model('Product', productSchema, 'product');
module.exports = Product;
