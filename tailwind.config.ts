import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Jefferson brand colors
        "jefferson-navy": "#152456", // Jefferson Deep Blue
        "jefferson-deep-blue": "#152456", // HEX 152456
        "jefferson-bright-blue": "#59b7df", // HEX 59b7df
        "volt-green": "#ece819", // HEX ece819
        "academic-red": "#e53e30", // HEX e53e30
        silver: "#dfe1df", // HEX dfe1df
        steel: "#8e9089", // HEX 8e9089
        slate: "#4e5259", // HEX 4e5259

        // Update the primary and secondary colors to match Jefferson brand
        primary: "#152456", // Jefferson Deep Blue
        secondary: "#59b7df", // Jefferson Bright Blue
        accent: "#ece819", // Volt Green
        highlight: "#e53e30", // Academic Red

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        "gt-sectra": ["GT Sectra Fine", "serif"],
        "gt-haptik": ["GT Haptik", "sans-serif"],
        "museo-sans": ["Museo Sans", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
