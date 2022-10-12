import express from "express";
import { RestaurantModel } from "../../database/allModels";
const Router = express.Router();
/**
 * Route     /
 * Des       create new restaurant
 * Params    none
 * Access    Public
 * Method    POST
 */
// Home work

/**
 * Route     /
 * Des       Get all restaurant details based on city
 * Params    none
 * Access    Public
 * Method    GET
 */
Router.get("/", async (req, res) => {
  try {
    // http://localhost:4000/restaurant/?city=delhi
    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    if (!restaurants) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /:_id
 * Des       Get individual restaurant details based on id
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findOne(_id);
    if (!restaurant) {
        return res.status(404).json({ error: "Restaurant not found" });
        }
    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /search/:searchString
 * Des       Get restaurant details based on search string
 * Params    _id
 * Access    Public
 * Method    GET
 */
 Router.get("/search/:searchString", async (req, res) => {
    /**
     * Search String = Raj
     * result = {
     * Raj Hotel,
     * Raj Palace,
     * Raja Hotel,}
     */
    try {
        const { searchString } = req.params;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" },
        });
        if (!restaurants) {
            return res.status(404).json({ error: `No Restaurant matched with ${searchString}` });
        }
        return res.json({ restaurants });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;
