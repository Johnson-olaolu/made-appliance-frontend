import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

export const WooCommerce = new WooCommerceRestApi({
  url: process.env.BASE_URL || "",
  consumerKey: process.env.WOO_CLIENT_KEY || "",
  consumerSecret: process.env.WOO_CLIENT_SECRET || "",
  version: "wc/v3",
  queryStringAuth: true,
});
