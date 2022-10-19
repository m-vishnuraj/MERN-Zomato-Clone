import express from "express";
import { FoodModel } from "../../database/allModels";
import { validateId } from "../../validation/common_validation";
const Router = express.Router();

/**
 * Route     /:_id
 * Des       Create new food Item
 * Params    none
 * Access    Public
 * Method    POST
 */
// Home Work
Router.post(
  "/new",async (req, res) => {
    try {
      const { foodData } = req.body;

      const food = await FoodModel.create({ ...foodData });

      return res.json({ food });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);;

/**
 * Route     /:_id
 * Des       Get food details on id
 * Params    _id
 * Access    Public
 * Method    GET
 */
 Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId (req.params);
    const foods = FoodModel.findById(_id);
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /r:_id
 * Des       Get all food based on particular restaurant
 * Params    _id
 * Access    Public
 * Method    GET
 */
 Router.get("/r/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await validateId (req.params);
    const foods = await FoodModel.find({
      restaurant: _id,
    });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /c:_category
 * Des       Get all food based on particular category
 * Params    category
 * Access    Public
 * Method    GET
 */

 Router.get("/c/:category", async (req, res) => {
  try {
    const { category } = req.params;
    await validateCategory(req.params);
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    if (!foods)
      return res
        .status(404)
        .json({ error: `No food matched with ${category}` });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
