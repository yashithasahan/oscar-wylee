import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "#0A37A9",
      },
      fontSize: {
        xxs: "8px",
        xss: "10px",
      },
      padding: {
        regular: "14px",
      },
      boxShadow: {
        custom: "0px 6px 4px -2px rgba(0,0,0,0.19)",
      },
      fontWeight: {
        regular: "400",
      },
    },
  },
  plugins: [],
} satisfies Config;
