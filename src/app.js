const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth")

//Handle Auth Middleware for all GET,POST, ......requests
app.use("/admin",adminAuth);

app.use("/user/data",userAuth,(req,res)=>{
    res.send("User Data sent");
});

app.get("/admin/getAllData",(req,res)=>{
    //Logic of fetching all data

    res.send("All Data Sent");
});

app.get("/admin/deleteUser",(req,res)=>{
    //Logic of fetching all data
    res.send("Deleted a user")
});



app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777..")
});