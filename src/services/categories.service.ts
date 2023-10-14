import https from "@/utils/https";
import { WooCommerce } from "./woocommerce.service";
import { ICategory } from "./types";

export const getSingleCategory = async (id: string) => {
  const response = await WooCommerce.get(`products/categories/${id}`);
  return response?.data as ICategory;
};

export const fetchAllCategories = async () => {
  const response = await fetch(`/categories`);
  return response;
};
