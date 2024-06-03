import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F42c37',
        brandYellow:'#fdc62e',
        brandGreen:'#2dcc6f',
        brandBlue:'#1376f4',
        brandWhite:'#eeeeee',

      },

    },
  },
  variants: {},
  plugins: [],
});
