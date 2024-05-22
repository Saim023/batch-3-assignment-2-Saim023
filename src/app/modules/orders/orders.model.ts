/* eslint-disable prettier/prettier */
import { Schema, model } from "mongoose";
import { Order } from "./orders.interface";

const OrderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,

    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Order model
export const OrderModel = model<Order>("Order", OrderSchema);
