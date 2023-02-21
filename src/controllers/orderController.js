const OrderService=require('../services/orderService')

const addItem=async(req,res)=>{
    try{
        const order=await OrderService.createOrder(req.body);
        return res.status(200).json({
            message:"added item to order",
            success:true,
            data:order
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'something went wrong'
        })
    }
}
const getOrder=async(req,res)=>{
    try{
        const order=await OrderService.getOrder(req.params.id);
        return res.status(200).json({
            message:"your orders",
            success:true,
            data:order
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'something went wrong',
            success:true,
        })
    }
}
const orderTotal=async(req,res)=>{
    try{
        const price=await OrderService.totalPrice(req.params.id);
        return res.status(200).json({
            message:"your orders",
            success:true,
            data:price
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:'something went wrong',
            success:true,
        })
    }
}
const orderUpdate=async(req,res)=>{
    try{
        const order=await OrderService.updateOrder(req.params.id,req.body);
        console.log(order);
        return res.status(200).json({
            message:'order update',
            success:true,
            data:order
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:"something went wrong",
            success:false
        })
    }
}
const deleteItemFromOrder=async(req,res)=>{
    try{
        const order=await OrderService.deleteItemFromOrder(req.body)
        return res.status(201).json({
            message:"order updated",
            success:true,
            data:order
        })
    }catch(err){
        return res.status(500).json({
            message:'some internal error',
            success:false
        })
        
    }
}
module.exports={
    addItem,
    getOrder,
    orderTotal,
    orderUpdate,
    deleteItemFromOrder
}