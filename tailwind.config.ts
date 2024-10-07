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
        "poke-blue": "linear-gradient(180deg, rgba(121, 140, 255, 0.7) 0%, rgba(36, 52, 155, 1) 100%)",
        "poke-red": "linear-gradient(180deg, rgba(255, 64, 64, 0.7) 0%, rgba(115, 22, 21, 1) 100%)",
        "poke-purple": "linear-gradient(180deg, rgba(157, 4, 211, 0.7) 0%, rgba(64, 0, 87, 1) 100%)",
        "poke-black": "linear-gradient(180deg, rgba(38, 38, 38, 0.7) 0%, rgba(0, 0, 0, 1) 100%)",
        "poke-brown": "linear-gradient(180deg, rgba(113, 49, 13, 0.7) 0%, rgba(50, 20, 2, 1) 100%)",
        "poke-gray": "linear-gradient(180deg, rgba(91, 91, 91, 0.7) 0%, rgba(45, 45, 45, 1) 100%)",
        "poke-green": "linear-gradient(180deg, rgba(0, 255, 56, 0.7) 0%, rgb(12, 133, 1) 100%)",
        "poke-pink": "linear-gradient(180deg, rgba(255, 0, 214, 0.7) 0%, rgb(138, 3, 115) 100%)",
        "poke-white": "linear-gradient(180deg, rgba(200, 200, 200, 0.7) 0%, rgba(70, 70, 70, 1) 100%)",
        "poke-yellow": "linear-gradient(180deg, rgba(255, 229, 0, 0.7) 0%, rgb(125, 128, 2) 100%)",
        "poke-water": "linear-gradient(180deg, rgba(0,86,255,1) 0%, rgba(5,87,215,1) 50%, rgba(0,86,255,1) 100%)",
        "poke-normal": "linear-gradient(180deg, rgba(162,149,0,1) 0%, rgba(142,130,3,1) 50%, rgba(162,149,0,1) 100%)",
        "poke-fighting": "linear-gradient(180deg, rgba(192,48,40,1) 0%, rgba(158,40,33,1) 50%, rgba(192,48,40,1) 100%)",
        "poke-flying": "linear-gradient(180deg, rgba(145,115,238,1) 0%, rgba(125,93,222,1) 50%, rgba(145,115,238,1) 100%)",
        "poke-poison": "linear-gradient(180deg, rgba(150,63,150,1) 0%, rgba(128,40,128,1) 50%, rgba(150,63,150,1) 100%)",
        "poke-ground": "linear-gradient(180deg, rgba(200,171,91,1) 0%, rgba(166,141,75,1) 50%, rgba(200,171,91,1) 100%)",
        "poke-rock": "linear-gradient(180deg, rgba(173,151,58,1) 0%, rgba(143,122,34,1) 50%, rgba(173,151,58,1) 100%)",
        "poke-bug": "linear-gradient(180deg, rgba(153,167,29,1) 0%, rgba(125,138,18,1) 50%, rgba(153,167,29,1) 100%)",
        "poke-ghost": "linear-gradient(180deg, rgba(101,78,140,1) 0%, rgba(88,64,130,1) 50%, rgba(101,78,140,1) 100%)",
        "poke-steel": "linear-gradient(180deg, rgba(158,158,179,1) 0%, rgba(136,136,157,1) 50%, rgba(158,158,179,1) 100%)",
        "poke-fire": "linear-gradient(180deg, rgba(222,117,42,1) 0%, rgba(195,100,32,1) 50%, rgba(222,117,42,1) 100%)",
        "poke-grass": "linear-gradient(180deg, rgba(102,177,64,1) 0%, rgba(87,153,53,1) 50%, rgba(102,177,64,1) 100%)",
        "poke-electric": "linear-gradient(180deg, rgba(219,183,38,1) 0%, rgba(193,161,37,1) 50%, rgba(219,183,38,1) 100%)",
        "poke-psychic": "linear-gradient(180deg, rgba(214,72,115,1) 0%, rgba(193,62,102,1) 50%, rgba(214,72,115,1) 100%)",
        "poke-ice": "linear-gradient(180deg, rgba(127,186,186,1) 0%, rgba(111,164,164,1) 50%, rgba(127,186,186,1) 100%)",
        "poke-dragon": "linear-gradient(180deg, rgba(100,49,222,1) 0%, rgba(83,38,191,1) 50%, rgba(100,49,222,1) 100%)",
        "poke-dark": "linear-gradient(180deg, rgba(112,88,72,1) 0%, rgba(91,74,63,1) 50%, rgba(112,88,72,1) 100%)",
        "poke-fairy": "linear-gradient(180deg, rgba(219,126,157,1) 0%, rgba(195,103,134,1) 50%, rgba(219,126,157,1) 100%)",
        "poke-unknown": "linear-gradient(180deg, rgba(158,0,74,1) 0%, rgba(126,1,59,1) 50%, rgba(158,0,74,1) 100%)",
        "poke-shadow": "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(42,42,42,1) 50%, rgba(0,0,0,1) 100%)",
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
      },
      screens: {
        '3xl': '1920px'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
