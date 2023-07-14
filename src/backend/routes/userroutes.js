const { Router } = require("express");
const router= express.Router();

const user_controller = require("../controllers/User_controller");

signupRoute.post("/signup", user_controller.userSignup);
loginRoute.post("/login", user_controller.userLogin);
displayRoute.get("/books", user_controller.bookDisplay);
searchTitleRoute.get("/book/:title", user_controller.bookSearchByTitle);
searchGenreRoute.get("/book/:genre", user_controller.bookSearchByGenre);
searchAuthorRoute.get("/book/:author", user_controller.bookSearchByAuthor);
searchSubGRoute.get("/book/:sub-genre", user_controller.bookSearchBySub_genre);

module.exports = router;