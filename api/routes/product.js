const express = require("express");
const { Productt, updateProduct, deleteProduct, findAll, findProduct } = require("../controlers/product");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();

router.post("/",verifyTokenAndAdmin,Productt );
router.put("/:id",verifyTokenAndAdmin,updateProduct );
router.delete("/:id",verifyTokenAndAdmin, deleteProduct );
router.get("/", findAll);
router.get("/find/:id", findProduct);


module.exports = router;
