/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "var(--heading-h1-font-size)",
        h2: "var(--heading-h2-font-size)",
        h3: "var(--heading-h3-font-size)",
        h4: "var(--heading-h4-font-size)",
        h5: "var(--heading-h5-font-size)",
        h6: "var(--heading-h6-font-size)",
        body: "var(--body-text-font-size)",
        small: "var(--text-small-font-size)",
      },
      fontWeight: {
        h1: "var(--heading-h1-font-weight)",
        h5: "var(--heading-h5-font-weight)",
        body: "var(--body-text-font-weight)",
      },
      lineHeight: {
        body: "var(--body-text-line-height)",
      },
      colors: {
        primary: "var(--colorprimary)",
        secondary: "var(--colorsecondary)",
        success: "var(--colorsuccess)",
        info: "var(--colorinfo)",
        warning: "var(--colorwarning)",
        error: "var(--colorerror)",
        grey1: "var(--colorgrey-1)",
        grey2: "var(--colorgrey-2)",
        grey3: "var(--colorgrey-3)",
        grey4: "var(--colorgrey-4)",
        grey5: "var(--colorgrey-5)",
      },
    },
  },
  plugins: [],
};
