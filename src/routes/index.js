const express=require('express')
const router=express.Router();//express router

const v1routes=require('./v1');
router.use('/v1',v1routes);//any request that start with v1 goes to v1routes ie v1 folder
module.exports=router;