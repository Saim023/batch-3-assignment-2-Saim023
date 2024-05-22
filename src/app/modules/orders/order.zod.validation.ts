/* eslint-disable prettier/prettier */
import { z } from "zod";

const OrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().min(0),
  quantity: z.number().min(1),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export default OrderValidationSchema;
