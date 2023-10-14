import https from "@/utils/https";
import { getSingleProduct } from "./product.service";

export const fetchDealofTheDay = async () => {
  const id = process.env.HOMEPAGE_ID;
  const response = await https.get({ url: `/pages/${id}` });
  const deal_of_the_day_id = response?.acf.deal_of_the_day;

  const top_deal_1_id = response?.acf.top_deals_1;
  const top_deal_2_id = response?.acf.top_deals_2;

  const top_deal_1 = await getSingleProduct(top_deal_1_id);
  const deal_of_the_day = await getSingleProduct(deal_of_the_day_id);

  const top_deal_2 = await getSingleProduct(top_deal_2_id);

  return {
    deal_of_the_day,
    top_deal_1,
    top_deal_2,
  };
};
