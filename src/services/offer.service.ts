import https from "@/utils/https";
import { getSingleProduct } from "./product.service";
import { IProduct } from "./types";

export const fetchOffers = async () => {
  const id = process.env.HOMEPAGE_ID;
  const response = await https.get({ url: `/pages/${id}` });
  const offersIds = response?.acf.homepage_offers.map((res: any) => res.product);
  const offers: IProduct[] = [];
  for (const offerId of offersIds) {
    const data = await getSingleProduct(offerId);
    offers.push(data);
  }
  return offers;
};
