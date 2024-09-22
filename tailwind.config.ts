import {nextui} from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "poke-blue": "linear-gradient(180deg, rgba(121, 140, 255, 1) 0%, rgba(36, 52, 155, 1) 100%)",
        "poke-red": "linear-gradient(180deg, rgba(255, 64, 64, 1) 0%, rgba(115, 22, 21, 1) 100%)",
        "poke-purple": "linear-gradient(180deg, rgba(157, 4, 211, 1) 0%, rgba(64, 0, 87, 1) 100%)",
        "poke-black": "linear-gradient(180deg, rgba(38, 38, 38, 1) 0%, rgba(0, 0, 0, 1) 100%)",
        "poke-brown": "linear-gradient(180deg, rgba(113, 49, 13, 1) 0%, rgba(50, 20, 2, 1) 100%)",
        "poke-gray": "linear-gradient(180deg, rgba(91, 91, 91, 1) 0%, rgba(45, 45, 45, 1) 100%)",
        "poke-green": "linear-gradient(180deg, rgba(0, 255, 56, 1) 0%, rgb(12, 133, 1) 100%)",
        "poke-pink": "linear-gradient(180deg, rgba(255, 0, 214, 1) 0%, rgb(138, 3, 115) 100%)",
        "poke-white": "linear-gradient(180deg, rgba(200, 200, 200, 1) 0%, rgba(70, 70, 70, 1) 100%)",
        "poke-yellow": "linear-gradient(180deg, rgba(255, 229, 0, 1) 0%, rgb(125, 128, 2) 100%)",
      },
      fontFamily: {
        "chakra" : "Chakra",
        "chakra-bold" : "ChakraBold"
      },
      colors: {
        "water": "#0500ff",
        "normal": "#a8a878",
        "fighting": "#c03028",
        "flying": "#a890f0",
        "poison": "#a040a0",
        "ground": "#e0c068",
        "rock": "#b8a038",
        "bug": "#a8b820",
        "ghost": "#705898",
        "steel": "#b8b8d0",
        "fire": "#f08030",
        "grass": "#78c850",
        "electric": "#f8d030",
        "psychic": "#f85888",
        "ice": "#98d8d8",
        "dragon": "#7038f8",
        "dark": "#705848",
        "fairy": "#ffaec9",
        "unknown": "#9e004a",
        "shadow": "#000000",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
