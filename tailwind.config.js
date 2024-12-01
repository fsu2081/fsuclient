import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "hsl(23, 89%, 96%)",
          100: "hsl(23, 86%, 92%)",
          200: "hsl(21, 86%, 83%)",
          300: "hsl(19, 86%, 72%)",
          400: "hsl(34, 85%, 48%)",
          500: "hsl(24, 83%, 53%)",
          600: "hsl(22, 79%, 48%)",
          700: "hsl(6, 78%, 40%)",
          800: "hsl(4, 70%, 34%)",
          900: "hsl(4, 66%, 28%)",
          950: "hsl(1, 70%, 15%)",
        },
        secondary: {
          50: "hsl(207, 73%, 97%)",
          100: "hsl(213, 69%, 94%)",
          200: "hsl(208, 72%, 86%)",
          300: "hsl(207, 71%, 74%)",
          400: "hsl(205, 70%, 60%)",
          500: "hsl(206, 66%, 52%)",
          600: "hsl(207, 73%, 39%)",
          700: "hsl(208, 72%, 32%)",
          800: "hsl(208, 67%, 27%)",
          900: "hsl(209, 61%, 24%)",
          950: "hsl(212, 60%, 16%)",
        },
        background: {
          50: "hsl(0, 0%, 100%)",
          100: "hsl(0, 0%, 94%)",
          200: "hsl(0, 0%, 86%)",
          300: "hsl(0, 0%, 74%)",
          400: "hsl(0, 0%, 60%)",
          500: "hsl(0, 0%, 49%)",
          600: "hsl(0, 0%, 40%)",
          700: "hsl(0, 0%, 32%)",
          800: "hsl(0, 0%, 27%)",
          900: "hsl(0, 0%, 24%)",
          950: "hsl(0, 0%, 16%)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],
};
