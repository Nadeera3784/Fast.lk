"use strict"

const mongoose = require('mongoose')

//buyer schema
const buyer_Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true, 
        min: 8,
        max: 1024
    },
    address: {
        houseNo: {
            type: String,
            required: true, 
        },
        streetName: {
            type: String,
            required: true,  
        },
        city: {
            type: String,
            required: true, 
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        min: 1,
        max: 10
    }
}, {timestamps: true})

module.exports = mongoose.model("Buyer", buyer_Schema)