/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: colors.purple,
                secondary: colors.pink,
                background: {
                    light: "hsl(240, 30%, 99%)",
                    dark: "hsl(240, 10%, 3.9%)",
                },
                foreground: {
                    light: "hsl(240, 10%, 3.9%)",
                    dark: "hsl(0, 0%, 98%)",
                },
                card: {
                    light: "hsl(0, 0%, 100%)",
                    dark: "hsl(240, 10%, 3.9%)",
                },
            },
        },
    },
    plugins: [],
};
