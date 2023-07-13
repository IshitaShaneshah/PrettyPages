//express
const express = require("express")
const app= express()

app.get("/" , (req,res) =>{
    res.send("Main Page")
})

app.get("/login", (req,res) => {
    res.send("login page")
})

app.get("/signup", (req,res) => {
    res.send("signup page")
})


app.listen(3001, ()=>{
    console.log("Server started successfully")
})

//Database
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://shreyas:SqAbzpzfoA1zyhDD@cluster0.alwhgfw.mongodb.net/pretty-page?retryWrites=true&w=majority")
.then(() => {
    console.log("MongoDB connected")
})
.catch(()=>{
    console.log("Failed")
})


