const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName:"Pawan",lastName:"Vaibhav"});
});

app.post("/user",(req,res)=>{
    //saving data to DB
    res.send("Data successfully saved to database!");
})

app.delete("/user",(req,res)=>{
    res.send("Deleted successfully!!");
})

app.patch("/user",(req,res)=>{
    res.send("patched successfully!!");
})
app.put("/user",(req,res)=>{
    res.send("kept successfully!!");
})

app.use("/test",(req,res)=>{
    res.send("i can test now!")
});


app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777..")
});