const express = require("express")
// const { Router } = require("express");
const router = express.Router();

const vendor_controller = require("../controllers/vendor_controller");

router.post("/signup", vendor_controller.vendorSignup);
router.post("/login", vendor_controller.vendorLogin)
router.post("/bookAdd", vendor_controller.bookAdd);
router.get("/bookDisplay", vendor_controller.booksDisplay)
router.get("/catalog", vendor_controller.bookCatalog);
router.put("/updateBookDetails/:id", vendor_controller.bookUpdate);


module.exports = router;
