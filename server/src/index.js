import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/db.js";
import { app } from "./app.js";

// Connect DB at module load (works for both local dev and Vercel cold starts)
connectDB().catch((err) => console.log("MongoDB connection fail", err));

// Only bind a port when running locally (Vercel sets VERCEL=1 automatically)
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`Running server at PORT ${PORT}`));
}

export default app;
