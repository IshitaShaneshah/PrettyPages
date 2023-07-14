const signupRoute = require("express").Router();
const signmodel = require("../models/User_model");

signupRoute.post("/signup", async (req, res) =>{
    try {
        const data = req.body;
        const newUser = new signmodel(data);
        await newUser.save().then(()=>{
            res.status(200).json({message: "successfull"})
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = signupRoute;