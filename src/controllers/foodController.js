const crud=require('../services/crudService');
const Food=require('../models/food');
const Resturant=require('../models/restaurant');
const create=async(req,res)=>{
    try{
        const newfood=await crud.create(Food,req.body);
        const resturant=await crud.getById(Resturant,req.body.resturant)
        console.log(newfood);
        resturant.food.push(newfood);
        resturant.save();
        return res.status(200).send({
            message:"successfully added new food item",
            success:true,
            data:newfood
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"something went wrong",
            success:false
        })
    }
}
const destroy=async(req,res)=>{
    try{
        const resturant=await crud.getById(Resturant,req.params.restaurantId);
        resturant.food.forEach((fooditem,index,Object) => {
            if(fooditem._id==req.params.id){
                Object.splice(index,1);
            }
        });
        resturant.save();
        const food=await crud.destroy(Food,req.params.id);
        return res.status(200).json({
            message:'successfully delete food item',
            success:true,
            data:food
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            message:"something went wrong in food controller",
            success:false
        })
    }
}
module.exports={
    create,
    destroy
}