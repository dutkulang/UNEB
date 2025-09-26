import { Student } from "../models/Student.js";

export const createStudent = async(req, res) => {
    const REQUIRED_STUDENT_FIELDS = ['fullName', 'dateOfBirth', "gender" ]
    try{
        const data = req.body;
        const reqKeys  = Object.keys(data)
        if(!REQUIRED_STUDENT_FIELDS.every(field => reqKeys.includes(field))){
            throw new Error("missing required data fields, Student full name, date of Birth, gender")
        }
        const user  = await Student(data).save()
        res.status(201).json({
            user
        })
    } catch(error){
        res.status(401).json({
            "error": `ERROR: ${error.message}`
        })
    }
}