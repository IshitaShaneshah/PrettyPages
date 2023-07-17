const HttpError = require("../Utils/httpError");

const Vendor = require("../models/vendor_model");
const Book = require("../models/books_model");

exports.vendorSignup = async (req, res, next) => {
  const { email, password } = req.body;
  if (Vendor.findOne({ email: email })) {
    res.json({ message: "Vendor already exists" });
  } else {
    try {
      await Vendor.save();
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
  const newBook = new Book({
    author_name: req.params.author_name,
    image: req.params.image,
    title: req.params.title,
    description: req.params.description,
    Genre: req.params.Genre,
    sub_genre: req.params.sub_genre,
    pages: req.params.pages,
    vendor_mail: req.params.vendor_mail,
    price: req.params.price,
    quantity: req.params.quantity
  })

  // if (Book.findOne({ title: req.body.title })) {
  //   res.json({ message: "Book already exists" });
  // } else {
    try {
      await newBook.save();
      res.json({ message: "Book added" });
    } catch (err) {
      console.log(err);
      const error = new HttpError("Failed. Try again after some time", 500);
      return next(error);
    }
  // }
};

exports.bookUpdate = async (req,res,next) => {
  try {
    Book.findOneAndUpdate({_id : req.params.id}, {
      $set:{
        author_name: req.params.author_name,
        image: req.params.image,
        title: req.params.title,
        description: req.params.description,
        Genre: req.params.Genre,
        sub_genre: req.params.sub_genre,
        pages: req.params.pages,
        vendor_mail: req.params.vendor_mail,
        price: req.params.price,
        quantity: req.params.quantity
      }
    })
    .then(result => {
      res.status(200).json({message: 'Updated'})
    })
  } catch (err) {
    console.log(err);
    const error = new HttpError("Failed. Try again after some time", 500);
    return next(error);
  }
};

