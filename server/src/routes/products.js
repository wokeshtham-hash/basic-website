import express from "express";
import { connectToDatabase, getDatabaseState } from "../config/db.js";
import { seedProducts } from "../data/seedProducts.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const dbState = await connectToDatabase();

    if (dbState === "connected") {
      const count = await Product.countDocuments();

      if (count === 0) {
        await Product.insertMany(seedProducts);
      }

      const products = await Product.find().sort({ createdAt: 1 }).lean();

      return res.json({
        source: "mongodb",
        products
      });
    }

    return res.json({
      source: "seed",
      database: getDatabaseState(),
      products: seedProducts
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to load products.",
      details: error.message
    });
  }
});

export default router;
