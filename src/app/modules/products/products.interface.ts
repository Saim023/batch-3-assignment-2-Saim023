export type ProductVariant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  productId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: ProductVariant[];
  inventory: Inventory;
};
