import { IProduct } from "./types";
import { WooCommerce } from "./woocommerce.service";

export const getSingleProduct = async (id: string) => {
  const response = await WooCommerce.get(`products/${id}`);
  return response?.data as IProduct;
};
export const getSingleProductBySlug = async (slug: string) => {
  const response = await WooCommerce.get(`products?slug=${slug}`);
  return response?.data[0] as IProduct;
};

export const getProductsByTag = async (tagId: string) => {
  const response = await WooCommerce.get(`products?tag=${tagId}`);
  return response?.data as IProduct[];
};

export const getAllProducts = async () => {
  const response = await WooCommerce.get(`products`);
  return response?.data as IProduct[];
};

export const queryProducts = async (query: { category?: number }) => {
  const response = await WooCommerce.get(`products?category=${query.category}`);
  return response?.data as IProduct[];
};
