import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Running server at PORT ${PORT}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.error(
          `Port ${PORT} is already in use. Stop the process using it or set a different PORT.`
        );
        process.exit(1);
      }

      console.error("Server error: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Mongo db connection fail", err);
  });
