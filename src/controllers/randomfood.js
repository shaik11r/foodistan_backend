
const random=require('../models/random');
const create=async(req,res)=>{
    try{
        const foo=await new random(req.body).save();
        console.log(foo);
        res.status(200).send({
            data:foo
        })
    }
    catch(err){
        console.log(err);
    }
}
const getAll=async(req,res)=>{
    try{
        const response=await random.find();
        console.log(response);
        res.status(200).json({
            data:response
        })
    }
    catch(err){
        console.log(err);
    }
}
module.exports={
    create,
    getAll
}