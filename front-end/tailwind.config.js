/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-on-surface-variant) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--color-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--color-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--color-surface-container-highest) / <alpha-value>)",
        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",
        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
        "on-primary-container": "rgb(var(--color-on-primary-container) / <alpha-value>)",
        "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          emerald: "#34d399",
          hover: "#10b981",
        },
        pamir: {
          primary: "#34d399",
          "on-primary": "#ffffff",
          bg: "#f8faf9",
          on: "#132a13",
          secondary: "#4b7a63",
          surface: "#f8faf9",
          surfaceLow: "#eef5ef",
          surfaceHigh: "#e7efe8",
          surfaceHighest: "#e0e9e1",
          outline: "#5d7460",
        },
        "background-light": "#f8faf9",
        "background-dark": "#0a0f0a",
        "forest": {
          dark: "#132a13",
          deep: "#060d06",
          muted: "#234723",
        },
        "emerald-dark": "#065f46",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        serif: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        playfair: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.75rem", { lineHeight: "1.1", fontWeight: "500" }],
        "headline-md": ["1.875rem", { lineHeight: "1.2", fontWeight: "500" }],
        "label-caps": ["10px", { letterSpacing: "0.2em", fontWeight: "700" }],
        "card-title": ["1.5rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
