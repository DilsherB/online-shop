import express from "express";
const router = express.Router();
import products from "../data/products.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/product.model.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Resource not found");
    };
    // const product = products.find((p) => p._id === req.params.id);
    res.json(product);
  })
);

export default router;