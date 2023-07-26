//express
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors")

//routes require
const userRoute = require("./routes/userroutes");
const vendorRoute = require("./routes/veendorroutes")
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

//routes call
app.use("/api/v1", userRoute);
app.use("/api/v2", vendorRoute)

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

  //server run
  app.listen(3100, () => {
    console.log("Server started successfully");
  });