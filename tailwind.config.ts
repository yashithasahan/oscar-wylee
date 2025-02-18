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
        xxs: "0.5rem",
      },
      padding: {
        regular: "14px",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
