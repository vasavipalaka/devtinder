const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup",async(req,res)=>{
    //Creating a new instance of the User model
    const user = new User({
        firstName: "Pawan",
        lastName: "Palaka",
        emailId: "palakapawan0982@gmail.com",
        password:"pawan092"
    });
     
    try{
        await user.save();// All of the mongoose functions,methods ,apis return promise
        res.send("User Added Successfully");
    }
    catch(err){
        res.status(400).send("Error saving the user:" + err.message);
    }
    
    
});


connectDB()
   .then(() =>{
    console.log("Database connection established");
    app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777..")
  });

   })
   .catch((err) =>{
    console.error("Database cannot be connected")
   });
