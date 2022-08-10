const express = require('express');
const app = express();
const router = express.Router();
const { registerUsers, loginUsers} = require('../controllers/authController')


router.post('/register', registerUsers );

router.post('/login', loginUsers)









module.exports = router