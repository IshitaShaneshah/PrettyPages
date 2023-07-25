const express = require("express")
// const { Router } = require("express");
const router= express.Router();

const user_controller = require("../controllers/User_controller");


router.post("/signup", user_controller.userSignup);
router.post("/login", user_controller.userLogin);
router.get("/books", user_controller.bookDisplay);
router.post("/wishlist/add", user_controller.wishlistAdd);
router.get("/wishlist/display", user_controller.wishlistDisplay);

module.exports = router;