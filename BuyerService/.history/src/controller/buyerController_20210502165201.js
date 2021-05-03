const express = require("express");
const router = express.Router();
const { addBuyer } = require("../service/buyerService");

router.post('/add', addBuyer);

module.exports = router