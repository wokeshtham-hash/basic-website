import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import contentRoutes from "./routes/content.js";
import productRoutes from "./routes/products.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/content", contentRoutes);
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log("Server listening on http://localhost:" + port);
});
