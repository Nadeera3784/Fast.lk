const mongoose = require("mongoose");
const auth = require("./../model/auth");
const Buyer = require("../model/buyer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const emailValue = req.body.email;
  const password = req.body.password;
  console.log(emailValue);

  try {
    const getUser = await Buyer.find({ email: emailValue });
    if (!getUser) {
      res.send("Invalid email");
    }

    const passwordCheck = bcrypt.compareSync(password, getUser[0].password);
    if (passwordCheck) {
      const token = jwt.sign(
        { _id: getUser[0]._id, email: getUser[0].email },
        process.env.TOKENSCRET,
        { expiresIn: '24h' }
      );
      res.send(token);
    } else {
      res.send("Invalid password");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports.login = login;