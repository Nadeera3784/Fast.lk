'use strict';

const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
mongoose.set('bufferCommands', false);

app.use(express.json());
app.use(cors());
env.config();

const PORT = process.env.PORT || 5005; 

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
  }, () => { console.log("Database connected") });

const buyerRoute = require('./src/controller/buyerController');

app.listen(PORT, () => {
    console.log(`Buyer service started on port : ${PORT}`);
});

app.use('/api/buyers', buyerRoute);
