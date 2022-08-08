const express = require('express');
const app = express();
const router = express.Router();
const {createUrlShorten , getShortUrl} = require('../controllers/urlController');




router.post("/urls"  , createUrlShorten);

router.get('/:code' , getShortUrl)









module.exports = router






