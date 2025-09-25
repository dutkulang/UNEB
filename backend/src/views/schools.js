import { School } from "../models/Schools.js"
export const allSchools= async(req, res)=>{
    try{
        res.status(200).json({
            "schools":[
                {
                    "schoolName": "City Parents primary school",
                    "district": "Kampala"
                }
            ]
        })
    }catch(error){
        res.status(400).json({
            "message": `ERROR: ${error.message}`
        })
    }
}
export const createASchool = async(req, res)=>{
    const REQUIRED_SCHOOL_FIELDS = ['name', 'centerNumber'];
    try{
        const data = req?.body
        if(!data){
            throw new Error('No data was recieved form client.')
        }

        const reqKeys = Object.keys(data)
        if(!REQUIRED_SCHOOL_FIELDS.every(field=> reqKeys.includes(field))){
            throw new Error("missing required data fields, School Name, District and center number")
        }
        const school =  await new School(data).save()
        res.status(201).json({
            school
        })
    } catch(error){
        res.status(400).json({
            message: `ERROR: ${error.message}`
        })
    }
}