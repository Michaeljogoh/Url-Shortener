const mongoose = require('mongoose');


const UrlSchema =  new mongoose.Schema({
    longurl:{
        type: String,
        require: true
      
    },
    
    shorturl:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

const Url = mongoose.model('url' , UrlSchema);
module.exports = Url;