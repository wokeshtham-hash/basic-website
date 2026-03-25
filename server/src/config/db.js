import mongoose from "mongoose";

let cachedState = "disconnected";

export async function connectToDatabase() {
  const mongoUri = process.env.MONGO_URI;

  if (typeof mongoUri === "undefined" || mongoUri === "") {
    cachedState = "fallback";
    return cachedState;
  }

  if (mongoose.connection.readyState === 1) {
    cachedState = "connected";
    return cachedState;
  }

  await mongoose.connect(mongoUri);
  cachedState = "connected";
  return cachedState;
}

export function getDatabaseState() {
  return cachedState;
}
