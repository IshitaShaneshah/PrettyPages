const express = require("express")
// const { Router } = require("express");
const router= express.Router();

const user_controller = require("../controllers/User_controller");


router.post("/signup", user_controller.userSignup);
router.post("/login", user_controller.userLogin);
router.get("/books", user_controller.bookDisplay);
router.get("/book/:title", user_controller.bookSearchByTitle);
router.get("/book/:genre", user_controller.bookSearchByGenre);
router.get("/book/:author", user_controller.bookSearchByAuthor);
router.get("/book/:sub-genre", user_controller.bookSearchBySub_genre);
router.post("wishlist/add", user_controller.wishlistAdd);
router.get("/wishlist/:id", user_controller.wishlistDisplay);

module.exports = router;