const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
exports.signup = async (req, res) => {
  console.log(req.body);
  const userObj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const user = await User.create(userObj);
    res.status(201).send({
      message: "User Created Sucessfully",
      data: user,
    });
  } catch (err) {
    console.log("something went wrong");
    res.status(500).send({
      message: "internal server error",
    });
  }
};
exports.login = async (req, res) => {
  const newUser = await User.findOne({
    email: req.body.email,
  });
  if (!newUser) {
    res.status(400).send({
      message: "email not found please try again",
    });
    return;
  }
  console.log(newUser);
  let isvalidpassword = await bcrypt.compare(
    req.body.password,
    newUser.password
  );
  if (!isvalidpassword) {
    res.status(400).send({
      message: "password is incorrect",
    });
    return;
  }
  let token = await jwt.sign({ id: newUser._id }, "nadeen", {
    expiresIn: "30d",
  });
  res.status(200).send({
    access_token: token,
    data: newUser,
  });
};
