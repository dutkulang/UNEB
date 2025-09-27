import bcrypt from "bcrypt"

export const hashPassword = async(password, salt=10)=>{
    return bcrypt.hash(password, salt)
}

export const validPasswordhash = async(password, passwordHash)=>{
    return bcrypt.compare(password, passwordHash)
}