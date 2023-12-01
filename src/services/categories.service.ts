import https from "@/utils/https";
import { WooCommerce } from "./woocommerce.service";
import { ICategory } from "./types";

export const getSingleCategory = async (id: number) => {
  const response = await WooCommerce.get(`products/categories/${id}`);
  return response?.data as ICategory;
};

export const getMultipleCategories = async (ids: number[]) => {
  const res = [] as ICategory[];
  for (const id of ids) {
    const response = await WooCommerce.get(`products/categories/${id}`);
    res.push(response?.data);
  }

  return res;
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
