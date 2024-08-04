import foodModel from "../models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  let img_name = `${req.file.filename}`;
  try {
    const food = await foodModel.create({
      title: req.body.title,
      description: req.body.description,
      image: img_name,
      price: req.body.price,
      category: req.body.category,
    });
    res.json({ success: true, message: "Food Added Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    res.json({ success: false, error: error });
  }
};

const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`./uploads/${food.image}`, (err) => {
      if (err) console.log(err);
    });
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    res.json({ success: false, message: "error" - error });
  }
};

export { addFood, listFood, removeFood };
