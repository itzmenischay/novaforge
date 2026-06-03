/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#1a1c1c",
        "primary-container": "#f26522",
        "surface-container": "#eeeeee",
        "on-tertiary": "#ffffff",
        "tertiary": "#006492",
        "outline": "#8d7166",
        "outline-variant": "#e1bfb3",
        "primary": "#a63b00",
        "on-background": "#1a1c1c",
        "on-tertiary-fixed-variant": "#004b6f",
        "on-primary-fixed-variant": "#7f2b00",
        "background": "#f9f9f9",
        "secondary": "#575e70",
        "on-secondary-container": "#5c6274",
        "tertiary-fixed-dim": "#8cceff",
        "primary-fixed": "#ffdbce",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed": "#141b2b",
        "secondary-fixed": "#dce2f7",
        "secondary-container": "#d9dff5",
        "surface-variant": "#e2e2e2",
        "on-tertiary-container": "#002d45",
        "on-primary-fixed": "#370e00",
        "inverse-surface": "#2f3131",
        "on-error-container": "#93000a",
        "tertiary-fixed": "#cae6ff",
        "surface-dim": "#dadada",
        "secondary-fixed-dim": "#c0c6db",
        "on-surface-variant": "#594138",
        "inverse-on-surface": "#f1f1f1",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#ffb599",
        "surface-tint": "#a63b00",
        "surface": "#f9f9f9",
        "on-secondary": "#ffffff",
        "on-primary-container": "#4f1800",
        "surface-container-highest": "#e2e2e2",
        "on-secondary-fixed-variant": "#404758",
        "on-tertiary-fixed": "#001e2f",
        "error": "#ba1a1a",
        "surface-bright": "#f9f9f9",
        "error-container": "#ffdad6",
        "tertiary-container": "#009ade",
        "surface-container-low": "#f3f3f3",
        "on-primary": "#ffffff",
        "surface-container-high": "#e8e8e8",
        "inverse-primary": "#ffb599"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1440px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "gutter": "24px",
        "unit": "4px"
      },
      fontFamily: {
        "display-hero-mobile": ["Hanken Grotesk", "sans-serif"],
        "body-sm": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "headline-lg": ["Hanken Grotesk", "sans-serif"],
        "display-hero": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "label-md": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "display-hero-mobile": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }],
        "body-sm": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-hero": ["80px", { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" }]
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'slide-up': 'slide-up 0.5s cubic-bezier(0.32, 0.72, 0, 1) forwards',
      }
    }
  },
  plugins: [],
}
