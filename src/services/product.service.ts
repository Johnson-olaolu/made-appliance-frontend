import { IProduct } from "./types";
import { WooCommerce } from "./woocommerce.service";

export const getSingleProduct = async (id: string) => {
  const response = await WooCommerce.get(`products/${id}`);
  return response?.data as IProduct;
};
