import User from "../models/user.js";
import { hashPassword } from "../utils/auth.js";
export const signUp = async(req, res)=>{
    const REQUIRED_SIGNUP_FIELDS = ['fullName', 'email', 'password']
    try{
        console.log(req.body)
        const requestKeys = Object.keys(req.body);
        if(!REQUIRED_SIGNUP_FIELDS.every(field => requestKeys.includes(field))){
            throw new Error("Missing required fields. full Name, email and password");
        }
        let  { fullName, email, password } = req.body
        const hashedPassword =  await hashPassword(password)
        console.log(hashedPassword)
        const user = await User({
            fullName,
            email,
            password: hashedPassword
        }).save()
        if(!user){
            throw new Error(`Failed to save data to Database`);
        }
        res.status(201).json({
            "message": "user created successfully",
            user,
        }
        )
    } catch(error){
        res.status(400).json({
            "error": `ERROR: ${error.message}`
        }
        )
    }

}