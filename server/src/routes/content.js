import express from "express";
import { connectToDatabase, getDatabaseState } from "../config/db.js";
import HomepageContent from "../models/HomepageContent.js";
import { featureCards, heroContent } from "../data/seedContent.js";

const router = express.Router();

router.get("/homepage", async (_req, res) => {
  try {
    const dbState = await connectToDatabase();

    if (dbState === "connected") {
      let content = await HomepageContent.findOne().lean();

      if (content === null) {
        content = await HomepageContent.create({
          ...heroContent,
          cards: featureCards
        });
        content = content.toObject();
      }

      return res.json({
        source: "mongodb",
        hero: {
          eyebrow: content.eyebrow,
          title: content.title,
          copy: content.copy,
          ctaLabel: content.ctaLabel
        },
        cards: content.cards
      });
    }

    return res.json({
      source: "seed",
      hero: heroContent,
      cards: featureCards,
      database: getDatabaseState()
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to load homepage content.",
      details: error.message
    });
  }
});

export default router;
