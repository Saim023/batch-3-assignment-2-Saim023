import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/products.route";
import { OrderRoute } from "./app/modules/orders/orders.route";

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/products", ProductRoutes);

// Order routes
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
