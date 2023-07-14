const { Router } = require("express");
const router= express.Router();
const usermodel = require("../models/User_model");
const user_controller = require("../controllers/User_controller");

signupRoute.post("/signup", user_controller.userSignup);
loginRoute.post("/login", user_controller.userLogin);


module.exports = router;