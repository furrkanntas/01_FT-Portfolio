/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'iphonexr': {'raw': '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'},
        'iphoneSE': {'raw': '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'},
        'iphoneX': {'raw': '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'},
        'iphone12pro': {'raw': '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)'},
        'galaxys8plus': {'raw': '(device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4)'},
        'xs': '400px', // Özel ekran genişliği için 'xs' adında bir tanım, 400 piksel genişlik
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        ftLightGreen: '#81c784',
        ftLiveOrange: '#ffb74d',

      },
      fontFamily: {
        body: ['Nunito']
      },
    },
  },
  plugins: [],
}
