import { z } from "zod";

const productVariantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  productId: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number().positive("Product price must be positive"),
  category: z.string().nonempty("Product category is required"),
  tags: z
    .array(z.string().nonempty("Product tag cannot be empty"))
    .nonempty("Product tags are required"),
  variants: z
    .array(productVariantValidationSchema)
    .nonempty("Product variants are required"),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
