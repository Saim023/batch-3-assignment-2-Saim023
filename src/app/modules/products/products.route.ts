import express from "express";
import { ProductControllers } from "./products.controller";

const router = express.Router();

// Products route
router.post("/create-products", ProductControllers.createProduct);

router.get("/", ProductControllers.getAllProducts);

router.get("/:productId", ProductControllers.getSingleProducts);

export const ProductRoutes = router;
