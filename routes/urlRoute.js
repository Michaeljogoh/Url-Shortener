const express = require('express');
const app = express();
const router = express.Router();
const {createUrlShorten , getShortUrl} = require('../controllers/urlController');
const {authToken} = require('../middleware/authorization')




router.post("/urls"  , authToken, createUrlShorten);

router.get('/:code' , authToken, getShortUrl)









module.exports = router






