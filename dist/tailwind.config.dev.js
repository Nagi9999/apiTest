"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{js,ts,jsx,tsx}", "./src/components/*.{js,ts,jsx,tsx}", "./public/**/*.html", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        yellow: '#F9FF00'
      }
    },
    fontSize: {
      headingmob: "40px",
      heading: "80px",
      heading2mob: "26px",
      heading2: "52px",
      heading3: "60px",
      desc: "18px",
      btn: "10px"
    },
    lineHeight: {
      heading: "81.7px",
      heading2: "62.4px",
      heading3: "73.13px",
      heading4: "72px",
      desc: "25.31px",
      desc2: "27.42px",
      btn: "12.19px"
    },
    letterSpacing: {
      btn: "3px"
    },
    borderRadius: {
      btn: "5px"
    },
    transitionTimingFunction: {
      "default": "cubic-bezier(0.19, 1, 0.22, 1)"
    },
    transitionDuration: {
      "default": "700ms"
    }
  },
  plugins: []
};