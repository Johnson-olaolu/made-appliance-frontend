import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

export const WooCommerce = new WooCommerceRestApi({
  url: process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL || "",
  consumerKey: process.env.WOO_CLIENT_KEY || process.env.NEXT_PUBLIC_WOO_CLIENT_KEY || "",
  consumerSecret: process.env.WOO_CLIENT_SECRET || process.env.NEXT_PUBLIC_WOO_CLIENT_SECRET || "",
  version: "wc/v3",
  queryStringAuth: true,
});
