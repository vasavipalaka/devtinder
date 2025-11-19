const express = require("express");

const app = express();

app.use("/",(err,req,res,next)=>{
    if(err){
        //Log your error
        res.status(500).send("something went wrong")
    }
});

app.use("/getUserData",(req,res)=>{
    //try{
         // Logic of DB call and get user data

         throw new Error("sfsgfbvsf");
         res.send("User Data sent");
    // } catch(err){
      //  res.status(500).send("Some error has occured in support")
     //}
   
});

app.use("/",(err,req,res,next)=>{
    if(err){
        //Log your error
        res.status(500).send("something went wrong")
    }
});



app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777..")
});