"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
// Product variant schema
const productVariantSchema = new mongoose_1.Schema({
    type: { type: String, required: [true, "Product type is required"] },
    value: { type: String, required: [true, "Product value is required"] },
});
// Inventory schema
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: [true, "Product quantity is required"] },
    inStock: { type: Boolean, required: [true, "Product instock is required"] },
});
// Product schema
const productSchema = new mongoose_1.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    name: { type: String, required: [true, "Product name is required"] },
    description: {
        type: String,
        required: [true, "Product description is required"],
    },
    price: { type: Number, required: [true, "Product price is required"] },
    category: { type: String, required: [true, "Product category is required"] },
    tags: { type: [String], required: [true, "Product tags are required"] },
    variants: {
        type: [productVariantSchema],
        required: [true, "Product variants are required"],
    },
    inventory: {
        type: inventorySchema,
        required: [true, "Product inventory is required"],
    },
});
// Model
const ProductModel = (0, mongoose_1.model)("Products", productSchema);
exports.ProductModel = ProductModel;
