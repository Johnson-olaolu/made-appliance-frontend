import https from "@/utils/https";

export const fetchSingleMenu = async (id: string) => {
  const response = await https.get({ url: `/menus/${id}` });
  console.log(response);
};

export const fetchAllMenu = async () => {
  const response = await https.get({ url: `/menu-locations` });
  console.log(response);
};
