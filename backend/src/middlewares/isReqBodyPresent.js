export const isReqBodyPresent = (req, res, next)=>{
    try{
        if(!req.body){
            throw new Error("No data was recieved from client.")
        }
        next()
    } catch(error){
        res.status(401).json({
            "message": `ERROR: ${error.message}`
        })
    }
    
}