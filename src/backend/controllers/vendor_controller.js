const HttpError = require("../Utils/httpError");

const Vendor = require("../models/vendor_model");
const Book = require("../models/books_model");

exports.vendorSignup = async (req, res, next) => {
  console.log(req.body);
  const newVendor = new Vendor({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("vendor", newVendor)
  // if (Vendor.findOne({ email: req.body.email })) {
  //   console.log("exists")
  //   res.json({ message: "Vendor already exists" });
  // } else {
    try {
      await newVendor.save();
      console.log("signed in")
      res.json({ message: "Vendor signed in" });
    } catch (err) {
      console.log(err);
      const error = new HttpError("Signup failed", 500);
      return next(error);
    }
  // }
};

exports.vendorLogin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(req.body)
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
    author_name: req.body.author_name,
    // image: req.params.image,
    title: req.body.title,
    description: req.body.description,
    Genre: req.body.Genre,
    sub_genre: req.body.sub_genre,
    pages: req.body.pages,
    vendor_mail: req.body.vendor_mail,
    price: req.body.price,
    quantity: req.body.quantity,
  });

  if (Book.findOne({ title: req.body.title })) {
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

exports.booksDisplay = async (req, res, next) => {
  try {
    const result = await Book.find();
    res.status(200).json({ message: result });
  } catch (err) {
    const error = new HttpError("Failed. Try again after some time", 500);
    return next(error);
  }
};

exports.bookUpdate = async (req, res, next) => {
  try {
    Book.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          author_name: req.params.author_name,
          image: req.params.image,
          title: req.params.title,
          description: req.params.description,
          Genre: req.params.Genre,
          sub_genre: req.params.sub_genre,
          pages: req.params.pages,
          vendor_mail: req.params.vendor_mail,
          price: req.params.price,
          quantity: req.params.quantity,
        },
      }
    ).then((result) => {
      res.status(200).json({ message: "Updated" });
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Failed. Try again after some time", 500);
    return next(error);
  }
};
