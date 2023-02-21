const mongoose=require('mongoose')

const connect =()=>{
    console.log("mongoose connection")
    return mongoose.connect('mongodb://localhost:27017/foo');
}
module.exports={
    connect
}