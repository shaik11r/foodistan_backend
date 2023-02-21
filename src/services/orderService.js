const Order=require('../models/order');
const Restaurant=require('../models/restaurant');
const Food=require('../models/food');

const createOrder=async(data)=>{
    try{
        const resturant=await Restaurant.findById(data.resturant);
        console.log("resturant in order service: ",resturant);

        let order
        if(data.order){
            order=await Order.findById(data.order)
            if(order.status!="cart"){
                console.log("order cannot be modified")
                return order;
            }
        }else{
         order=await Order({user:data.user,status:'cart'});
         console.log("near creating new order: ",order);
        }
        resturant.food.forEach((fooditem,index)=> {
            if(fooditem._id==data.food){
                order.food.push(fooditem);
            }
        });
        order.save();
        return order;
    }catch(err){    
        console.log(err);
    }
}
const getOrder=async(id)=>{
    try{
        const order=await Order.findById(id).populate('food').populate('resturant');
        return order;
    }
    catch(err){
        console.log(err);
    }
}
const totalPrice=async(id)=>{
    try{
        const order=await Order.findById(id).populate('food');
        let totalPrice=0;
        order.food.forEach((foodItem)=>{
            totalPrice+=foodItem.price;
        })
        return totalPrice;
    }catch(err){
        console.log(err);
    }
}
const updateOrder=async(id,data)=>{
    try{
        const order=await Order.findById(id);
        order.status=data.status;
        order.save();
        return order;
    }catch(err){
        console.log(err);
    }
}
const deleteItemFromOrder=async(data)=>{
    try{
        const order=await Order.findById(data.id);
        order.food.forEach((foodItem,index,object)=>{
            if(foodItem._id==data.food){
                object.splice(index,1);
            }
        })
        order.save();
        return order;
    }catch(err){
        console.log(err);
    }
}
module.exports={
    createOrder,
    getOrder,
    totalPrice,
    updateOrder,
    deleteItemFromOrder
}