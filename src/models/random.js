const mongoose=require('mongoose');
const randomSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
const randomModel=new mongoose.model('random',randomSchema);
module.exports=randomModel;