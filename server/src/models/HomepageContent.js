import mongoose from "mongoose";

const featureCardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  { _id: false }
);

const homepageContentSchema = new mongoose.Schema(
  {
    eyebrow: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    copy: { type: String, required: true, trim: true },
    ctaLabel: { type: String, required: true, trim: true },
    cards: {
      type: [featureCardSchema],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.models.HomepageContent ||
  mongoose.model("HomepageContent", homepageContentSchema);
