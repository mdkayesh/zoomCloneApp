/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        bg_primary: "var(--bg-primary)",
        text_color: "var(--text-color)",
        heading_color: "var(--heading-color)",
        item_color: "var(--item-color)",
        hover_color: "var(--hover-color)",
        btn_bg: "var(--button-bg-color)",
        btn_text: "var(--button-text-color)",
        btn_bg_hover: "var(--button-bg-hover-color)",
        btn_text_hover: "var(--button-text-hover-color)",
        footer_bg: "var(--footer-bg-color)",
        footer_heading: "var(--footer-heading-color)",
        footer_text: "var(--footer-text-color)",
        footer_text_hover: "var(--footer-text-hover-color)",
        footer_bottom_bg: "var(--footer-bottom-bg-color)",
        footer_bottom_text: "var(--footer-bottom-text-color)",
      },
      screens: {
        lg: "992px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
