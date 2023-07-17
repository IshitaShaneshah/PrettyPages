//express
const express = require("express");
const app = express();
const userRoute = require("./routes/userroutes");
const vendorRoute = require("./routes/veendorroutes")
app.use(express.json());
app.use("/api/v1", userRoute);
app.use("/api/v2", vendorRoute)

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/signup", (req, res) => {
  res.send("signup page");
});

app.listen(3000, () => {
  console.log("Server started successfully");
});

//Database
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shreyas:SqAbzpzfoA1zyhDD@cluster0.alwhgfw.mongodb.net/pretty-page?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("Failed");
  });
