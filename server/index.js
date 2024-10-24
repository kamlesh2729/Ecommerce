import express from "express";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import productRoutes from "./routes/product.js";

dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send("This is a ecommerce clone API")
});

app.use("/user", userRoutes);
app.use("/admin", productRoutes);

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL)
  .then(() => app.listen(PORT, () => { console.log(`server port is running on ${PORT}`) }))
  .catch((err) => console.log(err.message));