const mongoose=require('mongoose');
const resturantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    },
    food:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'food'
        }
    ]
});
const resturantModel=new mongoose.model('resturant',resturantSchema);
module.exports=resturantModel;