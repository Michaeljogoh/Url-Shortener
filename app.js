const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');






app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`)
})