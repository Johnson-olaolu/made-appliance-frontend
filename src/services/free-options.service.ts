import https from "@/utils/https";
import { IFreeOption } from "./types";

export const fetchFreeOptions = async () => {
  const id = process.env.HOMEPAGE_ID;
  const response = await https.get({ url: `/pages/${id}` });
  return response?.acf.free_options as IFreeOption[];
};
