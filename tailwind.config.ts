import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ma-white": "#FFFFFF",
        "ma-off-white": "#F3F3F3",
        "ma-light-blue": "#0492F8",
        "ma-red": "#EB372E",
        "ma-text-secondary": "#171715",
        "ma-text-primary": "#979797",
        "ma-black": "#222222",
        "ma-grey": "#27282C",
      },
    },
  },
  plugins: [],
};
export default config;
