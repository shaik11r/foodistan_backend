const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    food:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'food'
    }],
    status:{
        type:String,
        required:true
    }
});
const orderModel=new mongoose.model('Order',orderSchema);
module.exports=orderModel;