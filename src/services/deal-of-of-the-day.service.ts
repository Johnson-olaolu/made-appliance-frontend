import https from "@/utils/https";
import { getSingleProduct } from "./product.service";

export const fetchDealofTheDay = async () => {
  const id = process.env.HOMEPAGE_ID;
  const response = await https.get({ url: `/pages/${id}` });
  const deal_id = response?.acf.deal_of_the_day;
  const data = await getSingleProduct(deal_id);
  return data;
};
