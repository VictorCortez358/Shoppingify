/** @type {import('tailwindcss').Config} */
module.exports = {
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
      width:{
        'sidebar': '5%',
        'sidebar_phone': '15%',
        'list': '70%',
        'shopping_list': '25%',
        'content': '85%',
      },
      height:{
        'list': '10%',
      },
      colors:{
        'item_selected': '#F9A109',
        'gray-text': '#34333A',
        'shopping_list': '#80485B',
      },
      textColor:{
        'gray-text': '#34333A',
        'yellow': '#F9A109',
        'gray-text-1': '#828282',
        'gray-tex-2': '#C1C1C4',
      },
      fontFamily:{
        'quicksand': 'Quicksand, sans-serif'
      },
      maxWidth:{
        'item': '182px',
      },
      maxHeight:{
        'item': '60%',
      },
      borderColor:{
        'yellow': '#F9A109',
      },
      screens:{
        phone: {'max': '479px'},
      },
      backgroundColor:{
        'yellow': '#F9A109',
      },
    },
  },
  plugins: [],
};
