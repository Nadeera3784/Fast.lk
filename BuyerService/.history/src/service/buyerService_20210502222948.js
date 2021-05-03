"use strict";

const Buyer = require("../model/buyer");

const addBuyer = async (req, res) => {
    const buyer = req.body;
    const newBuyer = new Buyer(buyer);
    try {
        await newBuyer.save();
        res.status(201).json(newBuyer); 
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const getBuyer = async (req, res) => {
    try {
     const currentBuyer = await Buyer.findById(req.params.id); 
     res.json(currentBuyer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 }

 const updateBuyer = async (req, res) => {
    try {
        const currentBuyer = await Buyer.findById(req.params.id);
        currentBuyer.firstName = req.sub;
        await changeBuyer.save();
        res.status(201).json(changeBuyer); 
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const deleteBuyer = async (req, res) => {
    try {
     const currentBuyer = await Buyer.findById(req.params.id); 
     currentBuyer.remove;
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 }

module.exports.addBuyer = addBuyer;
module.exports.getBuyer = getBuyer;