const express = require("express");
const { cart, updatecart, deletecart, findAll, findUsercart } = require("../controlers/cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();




router.post("/",verifyToken,cart)
router.put("/:id",verifyTokenAndAuthorization,updatecart)
router.delete("/:id",verifyTokenAndAuthorization,deletecart)
router.get("/",verifyTokenAndAdmin,findAll)
router.get("/find/:userId",verifyTokenAndAuthorization,findUsercart)



module.exports=router;  