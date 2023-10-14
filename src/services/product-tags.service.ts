import { WooCommerce } from "./woocommerce.service";

export const getSingleProductTag = async (id: string) => {
  const response = await WooCommerce.get(`products/tags/${id}`);
  return response?.data;
};
