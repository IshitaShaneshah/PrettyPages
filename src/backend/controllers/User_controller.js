// const express = require("express")
const HttpError = require("../Utils/httpError");

const User = require("../models/User_model");
const Book = require("../models/books_model");
const Wishlist = require("../models/wishlist_model");
const Cart = require("../models/cart_model");

var user_mid = "";
var wish = "";
//User Signup
exports.userSignup = async (req, res, next) => {
  // console.log(req.body)
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  if (User.findOne({ email: req.body.email })) {
    res.json({ message: "user already exists" });
  } else {
    try {
      await newUser.save();
      res.json({ message: "User signed in" });
    } catch (err) {
      console.log(err);
      const error = new HttpError("Signup failed", 500);
      return next(error);
    }
  }
};

//User Login
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
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
};

//Catalog book display
exports.bookDisplay = async (res, req, next) => {
  const books = "";
  try {
    books = await Book.find();
    return res.status(200).send(books);
  } catch (err) {
    const error = new HttpError("Something is wrong", 500);
    throw error;
  }
};


exports.wishlistAdd = async (req, res, next) => {
  const { wishList, user_id } = req.body;
  const newWishlist = new Wishlist({
    user_id: user_id,
    wishList: wishList,
  });
  user_mid = user_id;
  try {
    await Wishlist.updateOne(
      { user_id: user_id },
      {
        $set: {
          user_id: newWishlist.user_id,
          wishList: newWishlist.wishList,
        },
      },
      { upsert: true }
    );
    // console.log("added");
    res.json({ message: "Book added in wishlist" });
  } catch (err) {
    const error = new HttpError("Book not found", 500);
    throw error;
  }
};

exports.wishlistDisplay = async(req,res,next) =>{
  try {
    const cata = await Wishlist.find({user_id: user_mid});
    res.status(200).json({ message: cata });
  } catch (err) {
    const error = new HttpError("Failed. Try again after some time", 500);
    return next(error);
  }
}
