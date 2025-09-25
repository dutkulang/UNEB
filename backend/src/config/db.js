import dotenv from "dotenv";
dotenv.config()

import mongoose from "mongoose";
const {connect} = mongoose;


export const connectDB = async()=>{
    await connect(
        process.env.DB_URL
    )
}