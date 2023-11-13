import { ITax } from "./types";
import { WooCommerce } from "./woocommerce.service";

export const getAllTax = async (): Promise<ITax[]> => {
  const response = await WooCommerce.get(`taxes`);
  return response?.data;
};
