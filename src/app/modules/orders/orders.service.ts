/* eslint-disable prettier/prettier */
import { Order } from "./orders.interface";
import { OrderModel } from "./orders.model";

const createOrdersIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = OrderModel.find();
  return result;
};

export const OrderServices = {
  createOrdersIntoDB,
  getAllOrdersFromDB,
};
