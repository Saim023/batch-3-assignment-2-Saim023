"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.productSchema = void 0;
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
exports.productSchema = new mongoose_1.Schema({
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
    },
    inventory: {
        type: inventorySchema,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});
// Delete operation using query middleware
exports.productSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
exports.productSchema.pre("findOne", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
exports.productSchema.pre("aggregate", function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
// Model
const ProductModel = (0, mongoose_1.model)("Products", exports.productSchema);
exports.ProductModel = ProductModel;
