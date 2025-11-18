import { Router } from "express";
import { getProducts, getProductBySlug, getProductsByCategory } from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getProducts);
router.get("/products/category/:category", getProductsByCategory);
router.get("/products/:slug", getProductBySlug);

export default router;
