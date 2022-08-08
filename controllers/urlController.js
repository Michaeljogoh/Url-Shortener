const  Url = require('../models/Url');
const shortid = require('shortid');


const createUrlShorten = async(req , res) =>{
    const {longurl} = req.body;
if(!longurl){
    res.status(200).json({error:"No content"})
}

const url = await Url.findOne({longurl})

if(url){
    res.status(409).json({error:"Url Already Exist"})
}

const shorturl = shortid.generate();

const shorten = await Url.create({longurl , shorturl});

res.status(200).json({shorten})

}

const getShortUrl = async(req , res) =>{
    const shortUrl = await Url.findOne({shorturl: req.params.code});
    if(!shortUrl) {
        return res.status(404);
    }

    res.redirect(shortUrl.longurl)
    res.status(200)

}









module.exports = {createUrlShorten , getShortUrl}