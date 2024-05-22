"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = require("./app/modules/products/products.route");
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application routes
app.use("/api/products", products_route_1.ProductRoutes);
// Order routes
app.use("/api/orders");
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
