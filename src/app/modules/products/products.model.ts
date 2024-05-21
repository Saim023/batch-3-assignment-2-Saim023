import { Schema, model } from "mongoose";
import { Product } from "./products.interface";

// Product variant schema
const productVariantSchema = new Schema({
  type: { type: String, required: [true, "Product type is required"] },
  value: { type: String, required: [true, "Product value is required"] },
});

// Inventory schema
const inventorySchema = new Schema({
  quantity: { type: Number, required: [true, "Product quantity is required"] },
  inStock: { type: Boolean, required: [true, "Product instock is required"] },
});

// Product schema
export const productSchema = new Schema({
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
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// Delete operation using query middleware
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

productSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

// Model
const ProductModel = model<Product>("Products", productSchema);

export { ProductModel };
