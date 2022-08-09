const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');
const UrlRoute = require('./routes/urlRoute');
const errorHandler = require('./middleware/errorHandler')


// Connect MongoDB
const  connectDB = async () =>{
 await mongoose.connect(process.env.URl_DB,{useNewUrlParser: true , useUnifiedTopology: true})
  console.log('MongoDB')
}
connectDB();

// Cross origin
app.use(cors({credentials: true , origin: true ,  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}))

// express
app.use(express.json());

//Routes
app.use('/', UrlRoute);

//error handler
app.use(errorHandler);




//Port
app.listen(PORT , ()=>{
    console.log(`Server started at port ${PORT}`)
})