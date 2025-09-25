import mongoose from "mongoose"
import validator from "validator";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    fullName: {
        type:String,
        required: true,
        trim: true,
        minLength: [5, "min length of 5 characters"],
        maxLength: [50, "max length of 50 characters"]
    },
    email: {
        type: String,
        unqiue : true,
        trim: true,
        required: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address")
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        validate: (value)=>{
            if (!validator.isStrongPassword(value)){
                throw new Error("weak password enter a stronger one")
            }
        }
    },
    gender: {
        type: String,
        trim: true,
        lowercase: true,
        default: "not specified",
        enum: ["male", "female", "not specified"]
    },

},
{
    timestamps: true
}
)

export const User= model("User", userSchema)