"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
/* eslint-disable prettier/prettier */
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
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
exports.OrderModel = (0, mongoose_1.model)("OrderModel", OrderSchema);
