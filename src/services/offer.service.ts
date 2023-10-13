import https from "@/utils/https";
import { getSingleProduct } from "./product.service";
import { IOffer, IProduct } from "./types";

export const fetchOffers = async () => {
  const id = process.env.HOMEPAGE_ID;
  const response = await https.get({ url: `/pages/${id}` });
  const fetched_offers = response?.acf.homepage_offers.map((res: any) => res);
  const offers: IOffer[] = [];
  for (const offer of fetched_offers) {
    const data = await getSingleProduct(offer.product);
    const offer_data = {
      product: data,
      offer: offer.offer,
    };
    offers.push(offer_data);
  }
  return offers;
};
