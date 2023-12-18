export const languages = ["English"] as const;
export const currencies = ["USD"] as const;

export const tempMenu = [
  // { title: "Our Stores", items: ["Dallas"] },
  { title: "Information", items: ["Recent Products", " Categories"] },
  { title: "Useful Links", items: ["Privacy Policy", "Terms & Conditions", "Gallery"] },
];

export const tempCategories = [
  { name: "Refigerator", url: "/category/refrigerator" },
  { name: "Ranges", url: "/category/ranges" },
  { name: "Dishwasher", url: "/category/dishwasher" },
  { name: "TV", url: "/category/tv" },
  { name: "CookTops", url: "/category/cook-tops" },
  { name: "Washer and Dryer", url: "/category/washer-dryer" },
  { name: "Microwave", url: "/category/microwave" },
  { name: "Oven", url: "/category/oven" },
];

export const tempOffers = ["Home", "Today's Deals", "Trending Products", "Blog", "Special Offers"];

export const screenSizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
