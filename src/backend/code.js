//express
const express = require("express");
const app = express();
const cors = require("cors")
const userRoute = require("./routes/userroutes");
const vendorRoute = require("./routes/veendorroutes")
app.use(cors());
app.use(express.json());
app.use("/api/v1", userRoute);
app.use("/api/v2", vendorRoute)

// app.get("/api/v2/bookAdd", (req,res)=>{
//   res.send()
// })

// app.get("/login", (req, res) => {
//   res.send("login page");
// });

// app.get("/signup", (req, res) => {
//   res.send("signup page");
// });


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

  app.listen(3100, () => {
    console.log("Server started successfully");
  });