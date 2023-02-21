const crud = require("../services/crudService");
const resturant = require("../models/restaurant");

const create = async (req, res) => {
  try {
    const restaurant = await crud.create(resturant, req.body);
    return res.status(200).send({
      message: "successfully added new restaurant item",
      success: true,
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "something went wrong",
      success: false,
    });
  }
};
const destroy = async (req, res) => {
  try {
    const restaurant = await crud.destroy(resturant, req.params.id);
    return res.status(200).json({
      message: "successfully delete restaurant item",
      success: true,
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "something went wrong in restaurant",
      success: false,
    });
  }
};
const getAllFoodItems = async (req, res) => {
  try {
    console.log("hi inside getall")
    const restaurant = await resturant.findById(req.params.id).populate(
      "food"
    );
    return res.status(200).json({
      message: "sucessfully fetched all restarants",
      success: true,
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
    res.status(200).send({
      message: "something went wrong",
      success: false,
    });
  }
};
module.exports = {
  create,
  destroy,
  getAllFoodItems,
};
