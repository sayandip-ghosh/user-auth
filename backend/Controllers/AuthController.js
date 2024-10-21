//server side validation
const bcrypt = require("bcrypt");
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

module.exports = {signup}