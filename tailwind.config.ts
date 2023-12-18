import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        cerebriSans: ["var(--font-cerebri-sans)"],
      },
      colors: {
        ma: {
          white: "#fff",
          black: "#000",
          primary: "#444444",
          primary2: "#323232",
          primary3: "#666666",
          "primary-light1": "#7e7e7e",
          blue: "#0540F2",
        },
      },
    },
    plugins: [],
  },
};
export default config;
