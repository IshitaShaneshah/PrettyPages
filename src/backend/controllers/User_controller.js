const mongodb = require("mongoose");
const HttpError = require("../Utils/httpError");

const User = require("../models/User_model");
const Vendor = require("../models/vendor_model");
const Book = require("../models/books_model");

exports.userSignup = async (req, res, next) => {
  const { email, password } = req.body;

  const NewUser = new User({
    email,
    password,
  });
  if (NewUser.findOne({ email: email })) {
    res.json({ message: "user already exists" });
  } else {
    try {
      await NewUser.save();
      res.json({ message: "User signed in" });
    } catch (err) {
      console.log(err);
      const error = new HttpError("Signup failed", 500);
      return next(error);
    }
  }
};
exports.userLogin = async (req,res,next) =>{
    const {email,password } = req.body;
    User.findOne({ email: email })
    .then((user) => {
      console.log(user);
      console.info(`user with email : ${email} was found successfully`);

      if (password === user.password) {
        console.info("login successful");
        return res.status(200).send(user);
      }
      console.warn("password incorrect");
      return res.status(401).send("password incorrect");
    })

    .catch((error) => {
      console.error(`user with ${email} does not exist`);
      return res.status(404).send(`user with ${email} does not exist`);
    });
      

}