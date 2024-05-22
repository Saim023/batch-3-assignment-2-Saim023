/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { OrderServices } from "./orders.service";

const createOrders = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    const result = await OrderServices.createOrdersIntoDB(orderData);

    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OrderController = {
  createOrders,
};
