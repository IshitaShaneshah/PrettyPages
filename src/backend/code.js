//express
const express = require("express");
const app = express();
const signupRoute = require("./routes/userroutes");
app.use(express.json());
app.use("/api/v1", signupRoute);

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
