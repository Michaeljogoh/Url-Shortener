const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const ensureAuthenticated = async (req , res , next) =>{

const {authorization } = req.headers;
    if(!authorization){
        return res.status(401)
    }

const token = authorization.replace('Bearer', '')

const verify =  jwt.verify(token , process.env.JWT_SECRET, async (payload)=>{
        if(!verify){
            return res.status(401)
        }
const {_id} = payload

const userdata = await Users.findById(_id)
        req.user = userdata
        next()
    })
}

module.exports = { ensureAuthenticated }