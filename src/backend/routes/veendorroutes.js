const { Router } = require("express");
const router = express.Router();

const vendor_controller = require("../controllers/vendor_controller");

signupRoute.post("/signup", vendor_controller.vendorSignup);
loginRoute.post("/login", vendor_controller.vendorLogin);
bookAddRoute.post("/bookAdd", vendor_controller.bookAdd);
// searchTitleRoute.get("/book/:title", user_controller.bookSearchByTitle);
// searchGenreRoute.get("/book/:genre", user_controller.bookSearchByGenre);
// searchAuthorRoute.get("/book/:author", user_controller.bookSearchByAuthor);
// searchSubGRoute.get("/book/:sub-genre", user_controller.bookSearchBySub_genre);

module.exports = router;
