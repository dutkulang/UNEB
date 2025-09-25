import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js"
import { schoolsRouter } from "./Router/schools.js";
import { studentRouter } from "./Router/student.js";
const app =  express()
const PORT  = process.env.PORT || 3000

app.use(express.json())
app.use("/schools", schoolsRouter);
app.use("/students", studentRouter)

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

