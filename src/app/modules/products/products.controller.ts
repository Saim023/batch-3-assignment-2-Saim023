/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import productValidationSchema from "./product.zod.validation";
import { ProductModel } from "./products.model";

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

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(201).json({
      success: true,
      message: "Products fetched successfully!",
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

// Get single products
const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const product = req.params.product;
    const result = await ProductServices.getSingleProductFromDB(product);

    res.status(201).json({
      success: true,
      messege: "Product fetched successfully!",
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

// Updating products
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

// Delete products
const deleteProducts = async (req: Request, res: Response) => {
  try {
    const product = req.params.product;
    const result = await ProductServices.deleteProductFromDB(product);

    res.status(201).json({
      success: true,
      messege: "Product deleted successfully!",
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

// Search products
const searchProducts = async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm;
  try {
    const products = await ProductModel.find({
      name: { $regex: searchTerm, $options: "i" },
    });

    res.status(201).json({
      success: true,
      messege: "Products matching search term 'iphone' fetched successfully!",
      data: products,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  updateProductData,
  deleteProducts,
  searchProducts,
};
