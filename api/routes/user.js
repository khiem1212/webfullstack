const express = require("express");
const { findAll } = require("../controlers/product");
const { updateUser, stats, deleteUser, findUser } = require("../controlers/user");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = express.Router();




router.put("/:id",verifyTokenAndAuthorization,updateUser)
router.delete("/:id",verifyTokenAndAuthorization, deleteUser)
router.get("/find/:id",verifyTokenAndAdmin, findUser)
router.get("/",verifyTokenAndAdmin, findAll)
router.get("/stats", verifyTokenAndAdmin, stats)




module.exports=router;




















module.exports = router;