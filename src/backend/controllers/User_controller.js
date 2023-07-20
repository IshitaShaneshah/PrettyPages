// const express = require("express")
const HttpError = require("../Utils/httpError");

const User = require("../models/User_model");
const Book = require("../models/books_model");

exports.userSignup = async (req, res, next) => {
  // console.log(req.body)
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  //   if (User.findOne({ email: req.body.email })) {
  //     res.json({ message: "user already exists" });
  // }   else {
  try {
    await newUser.save();
    res.json({ message: "User signed in" });
  } catch (err) {
    console.log(err);
    const error = new HttpError("Signup failed", 500);
    return next(error);
  }
  // }
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

exports.wishlistAdd = async (res, req, next) => {
  // const { title, userId } = req.body; 
  // console.log("hi",req.body)
  // try {
  //   // Find the book details based on the title from the "Books" model
  //   const book = await Book.findOne({ title });

  //   if (!book) {
  //     return res.status(404).json({ message: "Book not found" });
  //   }

  //   // Create a new wishlist item with a reference to the book and added date
  //   const newItem = {
  //     book: book._id,
  //     addedOn: Date.now(),
  //   };

  //   // Find the user's wishlist
  //   const user = await User.findById(userId);

  //   if (!user) {
  //     return res.status(404).json({ message: "User not found" });
  //   }

  //   // Add the new item to the user's wishlist
  //   user.wishlist.push(newItem);

  //   // Save the updated user with the new wishlist item
  //   await user.save();

  //   res.status(201).json({ message: "Book added to wishlist successfully" });
  // } catch (error) {
  //   console.error("Error adding book to wishlist:", error);
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
};


exports.wishlistDisplay = async(req,res,next)=>{
//   const { userId } = req.params;
//   try {
//     // Find the user's wishlist and populate the book field
//     const wishlist = await Wishlist.findOne({ owner: userId }).populate('wishlist.book');

//     if (!wishlist) {
//       return res.status(404).json({ message: 'Wishlist not found' });
//     }

//     res.status(200).json(wishlist.items);
//   } catch (error) {
//     console.error('Error fetching wishlist items:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
// }
}