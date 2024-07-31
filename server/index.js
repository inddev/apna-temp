import connectDB from "./database/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!");
    console.log(error);
    process.exit(1);
  });
