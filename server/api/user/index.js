import express from "express";

import { UserModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route     /
 * Des       Get authenticated user data
 * Params    none
 * Access    Public
 * Method    GET
 */

Router.get("/", async (req, res) => {
  try {
    const { email, fullName, phoneNumber, address } =
      req.user._doc;
      return res.json({ user: { email, fullName, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route     /:_id
 * Des       Get user data (for the review system)
 * Params    _id
 * Access    Public
 * Method    GET
 */
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);
    const { fullName } = getUser;
    if (!getUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ user: { fullName, profilePic } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
