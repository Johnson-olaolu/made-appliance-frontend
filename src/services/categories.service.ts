import https from "@/utils/https";
import { WooCommerce } from "./woocommerce.service";
import { ICategory } from "./types";

export const getSingleCategory = async (id: string) => {
  const response = await WooCommerce.get(`products/categories/${id}`);
  return response?.data as ICategory;
};

export const getSingleCategoryUsingSlug = async (slug: string): Promise<ICategory> => {
  return WooCommerce.get("products/categories", { slug })
    .then((response) => {
      return response.data[0] as ICategory;
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error?.response?.data);
    });
};
export const getSubCategories = async (id: number): Promise<ICategory[]> => {
  return WooCommerce.get("products/categories", { parent: id })
    .then((response) => {
      return response.data as ICategory[];
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error?.response?.data);
    });
};

export const fetchAllCategories = async () => {
  const response = await fetch(`/categories`);
  return response;
};
