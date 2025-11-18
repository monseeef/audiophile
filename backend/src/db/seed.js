import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import { Product } from "./models.js";
import connectDB from "./index.js";
import "dotenv/config";

const seedDB = async () => {
  await connectDB();

  try {
    await Product.deleteMany();

    const dataPath = path.join(process.cwd(), "../frontend/public/assets/db.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    const productsToInsert = data.data.map(product => ({
      ...product,
      newProduct: product.new,
    }));

    await Product.insertMany(productsToInsert);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
