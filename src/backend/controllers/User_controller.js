const mongodb = require("mongoose");
const HttpError = require("../Utils/httpError");

const User = require("../models/User_model");
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

exports.bookDisplay = async (res, req, next) => {
  const books = "";
  try {
    books = await Book.find();
    return res.status(200).send(books);
  } catch (err) {
    const error = new HttpError("Something is wrong", 200);
    throw error;
  }
};

exports.bookSearchByTitle = async (res, req) => {
  const { name } = req.body;
  Book.findOne({ title: name })
    .then((book) => {
      return res.status(200).send(book);
    })
    .catch((err) => {
      const error = new HttpError("Book not found", 200);
      throw error;
    });
};

exports.bookSearchByAuthor = async (res, req) => {
  const { au_name } = req.body;
  Book.findOne({ author_name: au_name })
    .then((book) => {
      return res.status(200).send(book);
    })
    .catch((err) => {
      const error = new HttpError("Book not found", 200);
      throw error;
    });
};

exports.bookSearchByGenre = async (res, req) => {
  const { genre } = req.body;
  Book.findOne({ Genre: genre })
    .then((book) => {
      return res.status(200).send(book);
    })
    .catch((err) => {
      const error = new HttpError("Book not found", 200);
      throw error;
    });
};

exports.bookSearchBySub_genre = async (res, req) => {
  const { subGenre } = req.body;
  Book.findOne({ sub_genre: subGenre })
    .then((book) => {
      return res.status(200).send(book);
    })
    .catch((err) => {
      const error = new HttpError("Book not found", 200);
      throw error;
    });
};
