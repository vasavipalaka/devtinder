const express = require("express");

const app = express();

app.use("/user",(req,res,next)=>{
    console.log("Handling the route user!!");
    //res.send("Response 1!!");
    next();
    
    
},
(req,res,next)=>{
    console.log("Handling the route user2!!");
    //res.send("Response 2!!");
    next();
},
(req,res,next)=>{
    console.log("Handling the route user3!!");
    //res.send("Response 3!!");
    next();
},
    (req,res,next)=>{
    console.log("Handling the route user4!!");
    res.send("Response 4!!");
    next();
}
)

app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777..")
});