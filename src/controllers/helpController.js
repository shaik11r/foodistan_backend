const helpDetails=(req,res)=>{
    return res.status(200).send({
        message:"sucess fully entered help details",
        data:{
            contact:"918xxxxxxx"
        }
    })
}
module.exports ={
    helpDetails
}