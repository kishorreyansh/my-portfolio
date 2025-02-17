/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(5deg)" },
        },
      },
      colors: {
        "aws-orange": "#ff9900",
        "text-light": "#ccd6f6",
        "text-dark": "#8892b0",
      },
      backgroundImage: {
        "cert-gradient": "linear-gradient(145deg, #232f3e 0%, #161e2d 100%)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        "screen-xl": "1440px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [import("@tailwindcss/line-clamp")],
};
