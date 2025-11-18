import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./db/index.js";
import productRoutes from "./api/products.routes.js";
import orderRoutes from "./api/orders.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", orderRoutes);

app.get("/", (req, res) => {
  res.send("Audiophile backend is running!");
});

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();
