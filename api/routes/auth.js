const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { register, login } = require("../controlers/auth");

//REGISTER
router.post("/register", register);

//LOGIN

router.post("/login", login);

module.exports = router;
