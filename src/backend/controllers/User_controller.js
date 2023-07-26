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

//Add the book to wishlist
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
    res.json({ message: "Book added in wishlist" });
  } catch (err) {
    const error = new HttpError("Book not found", 500);
    throw error;
  }
};

// Display the contents of wishlist
exports.wishlistDisplay = async (req, res, next) => {
  try {
    const cata = await Wishlist.find({ user_id: user_mid });
    res.status(200).json({ message: cata });
  } catch (err) {
    const error = new HttpError("Failed. Try again after some time", 500);
    return next(error);
  }
};

// Add the books to the cart
exports.cartAdd = async (req, res, next) => {
  const { cart, user_id } = req.body;
  const newCart = new Cart({
    user_id: user_id,
    cart: cart,
  });
  user_mid = user_id;
  try {
    await Cart.updateOne(
      { user_id: user_id },
      {
        $set: {
          user_id: newCart.user_id,
          cart: newCart.cart,
        },
      },
      { upsert: true }
    );
    res.json({ message: "Book added in cart" });
  } catch (err) {
    const error = new HttpError("Book not found", 500);
    throw error;
  }
};

// Display the contents of cart
exports.cartDisplay = async (req, res, next) => {
  try {
    const data = await Cart.find({ user_id: user_mid });
    res.status(200).json({ message: data });
  } catch (err) {
    const error = new HttpError("Failed. Try again after some time", 500);
    return next(error);
  }
};

//delete Elements from the cart
exports.deleteCartItem = async (req, res, next) => {
  const id = req.params.id;
  console.log(req);
  console.log(id);
  try {
    // const del = await Book.findByIdAndDelete(id);
    // res.send(del);
  } catch (err) {
    console.log(err);
    const error = new HttpError("Problem countered, try again", 500);
    return next(error);
  }
};

