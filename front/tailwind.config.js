/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        middle_green: "#545C45",
        white_main: "#FAFAFA",
        input_main: "#DAD8DA",
        button_main: "#92CF29",
        input_text: "#898E8C",
      },
    },
  },
};
