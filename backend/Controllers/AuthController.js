//server side validation
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User.model");

const signup =async (req,res)=>{
    try {
        const {name, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(409).json({message: "User already exists", success: false})
        }
        const newUser = new User({name, email,password})
        newUser.password = await bcrypt.hash(password, 10)
        await newUser.save()
        res.status(201).json({message: "User created successfully", success: true})

    } catch (error) {
        res.status(500).json({message: "Internal server error", success: false})
    }
}

const login =async (req,res)=>{
    try {
        const { email, password} = req.body;
        const errmsg = "User not found, Incorrect credentials"
        const user = await User.findOne({email})
        if(!user){
            return res.status(403).json({message: errmsg, success: false})
        }
        const isPassEqual = await bcrypt.compare(password, user.password)
        if(!isPassEqual){
            return res.status(403).json({message: errmsg, success: false})
        }
        const jwtToken = jwt.sign(
            {email: user.email, id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "24h"})
        res.status(201).json({message: "LoggedIn successfully", success: true,jwtToken, email, name:user.name})

    } catch (error) {
        res.status(500).json({message: "Internal server error", success: false})
    }
}


module.exports = {signup , login}