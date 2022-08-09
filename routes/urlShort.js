const express = require('express');
const app = express();
const router = express.Router();
const {createUrlShorten} = require('../controllers/urlController');




router.post("/shorten"  , createUrlShorten);









module.exports = router






