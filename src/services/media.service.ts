import https from "@/utils/https";
import { IImage, IMedia } from "./types";

export const fetchSingleImage = async (id: string) => {
  const response = await https.get({
    url: `/media/${id}`,
  });
  return response as IMedia;
};
