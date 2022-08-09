const mongoose = require('mongoose');
const shortid = require('shortid');

const UrlSchema =  new mongoose.Schema({
    fullurl:{
        type: String,
        required: true
    },
    
    shorturl:{
        type:String,
        default: shortid.generate
    }

})

const Url = mongoose.model('url' , UrlSchema);
module.exports = Url;