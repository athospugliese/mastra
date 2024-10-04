/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#5570F1',
          90: '#667cf3',
          80: '#7689f5',
          70: '#8796f7',
          60: '#97a3f9',
          50: '#a8b0fb',
          40: '#b8bdfd',
          30: '#c9cafe',
          20: '#d9d8ff',
          10: '#eae5ff',
        },
        secondary: {
          100: '#FFCC91',
          90: '#FFD1A3',
          80: '#FFD7B6',
          70: '#FFDCB8',
          60: '#FFE2CB',
          50: '#FFE7DD',
          40: '#FFECEB',
          30: '#FFF1EE',
          20: '#FFF6F3',
          10: '#FFF9F7',
        },
        black: {
          100: '#1C1D22',
          90: '#2B2C30',
          80: '#3A3B3E',
          70: '#494A4D',
          60: '#58595C',
          50: '#67686A',
          40: '#76777A',
          30: '#858689',
          20: '#949596',
          10: '#A3A3A4',
        },
        actions: {
          go: '#519C68',
          stop: '#CC5F5F',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}