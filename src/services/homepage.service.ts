import https from "@/utils/https";
import { getSingleProduct } from "./product.service";
import { getSingleCategory } from "./categories.service";
import { ICategory } from "./types";

const id = process.env.HOMEPAGE_ID;
export const fetchTopCategories = async () => {
  const response = await https.get({ url: `/pages/${id}` });
  const quickInfo = response?.acf.quick_info;
  const categories_ids = response?.acf.top_categories.map((i: any) => i.top_category);
  const top_categories: ICategory[] = [];
  for (const category_id of categories_ids) {
    const data = await getSingleCategory(category_id);
    top_categories.push(data);
  }
  return {
    quickInfo,
    top_categories,
  };
};
