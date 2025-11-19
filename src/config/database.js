const mongoose = require('mongoose')

const connectDB =async()=>{
    await mongoose.connect(
    "mongodb+srv://vasavipalaka:lqe5VtIPd8yQpdSa@namastenode.twudfae.mongodb.net/?appName=Namastenode/devTinder");
};

  module.exports = connectDB;