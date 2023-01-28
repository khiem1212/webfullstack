const express = require("express");
const { order, deleteOrder, updateOrder, findUserOrder, findAll, income } = require("../controlers/order");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const router = express.Router();

router.post("/",verifyToken,order);
router.put("/:id",verifyTokenAndAdmin,updateOrder);
router.delete("/:id",verifyTokenAndAdmin,deleteOrder);
router.get("/find/:userId",verifyTokenAndAuthorization, findUserOrder);
router.get("/",verifyTokenAndAdmin, findAll);
router.get("/icone",verifyTokenAndAdmin, income);

module.exports = router;
