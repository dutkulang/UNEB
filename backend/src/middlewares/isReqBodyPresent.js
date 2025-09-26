export const isReqBodyPresent = (req, res, next)=>{
    try{
        if(!req.body){
            throw new Error("No data was recieved from client.")
        }
        next()
    } catch(error){
        res.status(400).json({
            "error": `${error.message}`
        })
    }
    
}