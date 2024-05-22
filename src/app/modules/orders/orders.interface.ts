/* eslint-disable prettier/prettier */
export type Order = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
};
