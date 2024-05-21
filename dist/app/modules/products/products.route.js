"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
// Products route
router.post("/create-products", products_controller_1.ProductControllers.createProduct);
router.get("/", products_controller_1.ProductControllers.getAllProducts);
router.get("/:productId", products_controller_1.ProductControllers.getSingleProducts);
router.put("/:productId", products_controller_1.ProductControllers.updateProductData);
router.delete("/:productId", products_controller_1.ProductControllers.deleteProducts);
exports.ProductRoutes = router;
