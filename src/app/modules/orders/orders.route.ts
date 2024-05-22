/* eslint-disable prettier/prettier */
import express from "express";
import { OrderController } from "./orders.controller";

const router = express.Router();

router.post("/create-orders", OrderController.createOrders);

router.get("/", OrderController.getAllOrders);

router.get("/", OrderController.getOrdersByEmail);

export const OrderRoute = router;
