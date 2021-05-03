const express = require("express");
const router = express.Router();
const { addBuyer, getBuyer, getAllBuyers } = require("../service/buyerService");

router.post('/addBuyer', addBuyer);
router.post('/getAllBuyers', getAllBuyers);
router.get('/viewBuyer/:id', getBuyer);
router.patch('/updateBuyer/:id', getBuyer);
router.delete('/removeBuyer/:id', getBuyer);

module.exports = router;