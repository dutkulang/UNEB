import bcrypt from "bcrypt"

export const hashPassword = async(password, salt=10)=>{
    return bcrypt.hash(password, salt)
}