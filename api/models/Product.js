
var mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },

    desc: { type: String, require: true},
    categotries: { type: String, require: true },
    img: { type: String, require: true  },
    size: { type: Array},
    color: { type: Array},
    price: { type: Number, require: true },
    inStock: { type: Boolean, require: true },
  },
  { timestamps: true }
);

Product = mongoose.model("Product", productSchema);

module.exports = Product;
