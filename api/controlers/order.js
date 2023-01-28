const Order = require("../models/Order");

const order = async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};
const updateOrder = async (req, res) => {
  try {
    const update = await Order.findByIdAndUpdate(
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
const deleteOrder = async (req, res) => {
  try {
    const update = await Order.findByIdAndDelete(req.params.id);

    res.status(200).json("Order has been delete");
  } catch (err) {
    res.status(500).json(err);
  }
};

const findUserOrder = async (req, res) => {
  try {
    const Order = await Order.findByIdAndUpdate(req.params.id);

    res.status(200).json(Order);
  } catch (err) {
    res.status(500).json(err);
  }
};
const findAll = async (req, res) => {
  try {
    const order = await Order.find();

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

const income = async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {order, updateOrder, deleteOrder, findAll, findUserOrder, income};
