const mongoose = require('mongoose')

const connectDB =async()=>{
    await mongoose.connect(
    "mongodb+srv://ProjectNode:3PZpRXm5UtP5hxRE@devtinder.nkk5ek1.mongodb.net/");
};

  module.exports = connectDB;