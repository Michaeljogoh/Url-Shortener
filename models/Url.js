const mongoose = require('mongoose');

const UrlSchema =  new mongoose.Schema({
    fullurl:{
        type: String,
        required: true
    }

})

const Url = mongoose.model('url' , UrlSchema);
module.exports = Url;