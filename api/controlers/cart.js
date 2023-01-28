const Cart = require("../models/Cart");

const cart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};
const updatecart = async (req, res) => {
  try {
    const update = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(err);
  }
};
const findUsercart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(
      req.params.id,
      
    );

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};
const deletecart = async (req, res) => {
  try {
    const update = await Cart.findByIdAndDelete(
      req.params.id
     
    );

    res.status(200).json("cart has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
};
const findAll = async (req, res) => {
  try {
    const cart = await Cart.find();

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {cart, findUsercart, deletecart, findAll, updatecart};
