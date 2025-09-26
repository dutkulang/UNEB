import User from "../models/user.js";

export const signUp = async(req, res)=>{
    const REQUIRED_SIGNUP_FIELDS = ['fullName', 'email', 'password']
    try{
        console.log(req.body)
        const requestKeys = Object.keys(req.body);
        if(!REQUIRED_SIGNUP_FIELDS.every(field => requestKeys.includes(field))){
            throw new Error("Missing required fields. full Name, email and password");
        }
        const user = await User(req.body).save()
        if(!user){
            throw new Error(`Failed to save data to Database`);
        }
        res.status(201).json({
            "message": "user created successfully",
            user
        }
        )
    } catch(error){
        res.status(400).json({
            "error": `ERROR: ${error.message}`
        }
        )
    }

}