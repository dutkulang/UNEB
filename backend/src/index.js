import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js"
const app =  express()
const PORT  = process.env.PORT || 3000

connectDB().then(
    ()=>{        
        app.listen(PORT, ()=>{
        console.log(`DB connection success\nserver listening on http://localhost:${PORT}`);
    })
}
).catch(
    ()=>{
    console.log("Could not establish connection to Database");

}
)

