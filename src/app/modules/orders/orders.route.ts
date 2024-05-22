/* eslint-disable prettier/prettier */
import express from "express";
import { OrderController } from "./orders.controller";

const router = express.Router();

router.post("/create-orders", OrderController.createOrders);

export const OrderRoute = router;
