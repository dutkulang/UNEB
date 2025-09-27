import User from "../models/user.js"
import validator from "validator";

export const allUsers = async(req, res)=>{
    try{
        const users  = await User.find({}).select(["fullName", "email", "password"])
        if(users.length === 0){
            res.status(200).json({
                "message": "No users found."
            })
        }
        res.status(200).json({
            users
            })

    }catch(error){
        res.status(400).json({
            "error": `${error.message}`
        })
    }
}

export const deleteUser = async(req, res)=>{
    
    try{
        const { userId }  = req.params

        if(!userId){
            throw new Error("Missing user ID. Please specify User Id")
        }

        if(!validator.isMongoId(userId)) throw new Error("Invalid ID type")
        
        const user = await User.findByIdAndDelete(userId)

        if(!user){
            throw new Error(`User does not exist in DB`)
        }
        res.status(201).json({
            "message":  `User deleted successfully`,
            user
        })
    }catch(error){
        res.status(400).json(
            {
                "error":`${error.message}`
            }
        )
    }
}
