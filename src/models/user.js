const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true});
//pre save is a triggger that exe before we are saving this in database
userSchema.pre('save',async function(next){
    const user=this;
    const hash=await bcrypt.hash(this.password,10);
    this.password=hash;
    next();
})
const User=mongoose.model('User',userSchema);
module.exports=User;