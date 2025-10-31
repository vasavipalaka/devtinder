const express = require("express");

const app = express();

app.use("/", (req,res)=>{
    res.send("Hello Vasavi!! ")
})//request handler

app.use("/test",(req,res)=>{
    res.send("i can test now!")
})

app.use("/hello",(req,res)=>{
    res.send("Hello Pawan vaibhav!!!")
})

app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777..")
});