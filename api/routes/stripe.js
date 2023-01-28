const express = require("express");
const { payment } = require("../controlers/stripe");
const router = express.Router();




router.post("/payment",payment)
  


module.exports=router;