const mongodb = require("mongoose");
const HttpError = require("../Utils/httpError");

const User = require("../models/User_model");
const Vendor = require("../models/vendor_model");
const Book = require("../models/books_model");

exports.vendorSignup = async (req, res, next) => {
  const { email, password } = req.body;

  const NewVendor = new Vendor({
    email,
    password,
  });
  if (NewVendor.findOne({ email: email })) {
    res.json({ message: "Vendor already exists" });
  } else {
    try {
      await NewVendor.save();
      res.json({ message: "Vendor signed in" });
    } catch (err) {
      console.log(err);
      const error = new HttpError("Signup failed", 500);
      return next(error);
    }
  }
};

exports.vendorLogin = async (req, res) => {
  const { email, password } = req.body;
  Vendor.findOne({ email: email })
    .then((vendor) => {
      console.log(vendor);
      console.info(`vendor with email : ${email} was found successfully`);

      if (password === vendor.password) {
        console.info("login successful");
        return res.status(200).send(vendor);
      }
      console.warn("password incorrect");
      return res.status(401).send("password incorrect");
    })

    .catch((error) => {
      console.error(`vendor with ${email} does not exist`);
      return res.status(404).send(`vendor with ${email} does not exist`);
    });
};

exports.bookAdd = async (req, res, next) => {
  const newBook = new Book(req.body);

  if (NewBook.findOne({ title: req.body.title })) {
    res.json({ message: "Book already exists" });
  } else {
    try {
      await newBook.save();
      res.json({ message: "Book added" });
    } catch (err) {
      console.log(err);
      const error = new HttpError("Failed. Try again after some time", 500);
      return next(error);
    }
  }
};

// exports.bookUpdateQuantity = async();
