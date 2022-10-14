import express from "express";

import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route     /list/:_id
 * Des       Get menu based on menu id
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);

    if (!menus) {
      return res
        .status(404)
        .json({ error: "No menu present for this restaurant" });
    }

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /image
 * Des       Get all list of menu images with id
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const menuImages = await ImageModel.findById(_id);

    if (!menuImages) {
      return res.status(404).json({ error: "No menu Images found" });
    }

    return res.json({ menuImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;