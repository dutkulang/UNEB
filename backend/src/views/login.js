import User from "../models/user.js"
import { validPasswordhash } from "../utils/auth.js";
import validator from "validator";

export  const login = async(req, res)=>{
    const REQUIRED_LOGIN_FIELDS = ['email', 'password']
    try{
        const reqKeys  = Object.keys(req.body)
        
        if(!REQUIRED_LOGIN_FIELDS.every(field => reqKeys.includes(field))){
            throw new Error("Missing required login fields, email & password")
        }
        const {email, password} = req.body

        if(!validator.isEmail(email)){
            throw new Error("Invalid email address")
        }
        const user = await User.findOne({email: email})
        if(!user){
            throw new Error("Invalid credentials")
        }
        const passwordHash =  user.password

        if(! await validPasswordhash(password, passwordHash)){
            throw new Error("Invalid credentials")
        }        

        res.status(200).json({
            user
        })
    } catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}