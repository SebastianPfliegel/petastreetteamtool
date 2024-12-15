import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        admin: "url('~/assets/piglet-3386356_1920.jpg')",
      },
      colors: {
        peta: "#009fe3",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
