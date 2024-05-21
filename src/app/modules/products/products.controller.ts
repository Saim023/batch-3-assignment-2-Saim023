import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import productValidationSchema from "./product.zod.validation";
import { ProductModel, productSchema } from "./products.model";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    // zod validation
    const zodParsedData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductsIntoDB(zodParsedData);

    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(201).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const product = req.params.product;
    const result = await ProductServices.getSingleProductFromDB(product);

    res.status(201).json({
      success: true,
      messege: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProductData = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      updateData,
      { new: true, runValidators: true },
    );
    res.status(201).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  updateProductData,
};
