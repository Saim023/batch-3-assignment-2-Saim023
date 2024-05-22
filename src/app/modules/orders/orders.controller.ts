/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { OrderServices } from "./orders.service";
import { OrderModel } from "./orders.model";

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

// Get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();

    res.status(201).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

// Get orders by email

const getOrdersByEmail = async (req: Request, res: Response) => {
  const email = req.query.email;

  if (!email) {
    return res.status(403).json({
      success: false,
      message: "Email not found",
    });
  }

  try {
    const orders = await OrderModel.find({ email: email });
    return res.json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const OrderController = {
  createOrders,
  getAllOrders,
  getOrdersByEmail,
};
