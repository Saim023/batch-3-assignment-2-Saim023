"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productVariantValidationSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
});
const productValidationSchema = zod_1.z.object({
    productId: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive("Product price must be positive"),
    category: zod_1.z.string().nonempty("Product category is required"),
    tags: zod_1.z
        .array(zod_1.z.string().nonempty("Product tag cannot be empty"))
        .nonempty("Product tags are required"),
    variants: zod_1.z
        .array(productVariantValidationSchema)
        .nonempty("Product variants are required"),
    inventory: inventoryValidationSchema,
    isDeleted: zod_1.z.boolean(),
});
exports.default = productValidationSchema;
