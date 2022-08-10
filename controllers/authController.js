const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');




// Sign Up
const registerUsers = async (req , res)  =>{
    const {name , email ,  password , password2 } = req.body;
    //Validation
    if(!name || !email || !password || !password2 ){
        res.status(204).json({error:"Please fill in all field"})
    }

    if(password !== password2){
        res.status(204).json({error:"password does not match"})

    }

    if(password < 6){
       res.status(204).json({error:"password must not be less than six characters"})
    }
    
    await  Users.findOne({email : email})
    if(email){
        res.status(204).json({error:"Email already registered"})
     } else {
        

    //Hash password
const  hashedPassword = await bcrypt.hash(password, 10);

const newUser = await Users.create({name , email , password:hashedPassword});
    
res.json(201).json({newUser})

   }
            
    }
    
    


// Sign In

const loginUsers = async  (req , res ) =>{
    const {email , password} = req.body;

    if(!email|| !password){
       res.status(400).json("please add email or password")
    }

const savedUser =  await Users.findOne({email:email})
        if(!savedUser){
         res.status(404).json({error:"Invalid email"})
        }

const doMatch =  await  bcrypt.compare(password, savedUser.password)
            if(doMatch){
               const token = jwt.sign({user_id:savedUser}, process.env.JWT_SECRET , {expiresIn : '1d'})
               res.status(200).json({token, user:savedUser})
            } else {
                return res.status(401).json("Invaild Password")
            }
           
       
       
    

}

module.exports = {registerUsers , loginUsers}