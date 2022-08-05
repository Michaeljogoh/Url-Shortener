const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');

// Connect MongoDB
const  connectDB = async () =>{
 await mongoose.connect(process.env.URl_DB,{useNewUrlParser: true , useUnifiedTopology: true})
  console.log('MongoDB')
}
connectDB();





//Port
app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`)
})