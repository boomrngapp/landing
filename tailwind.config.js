module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx', './components/**/*.{js,ts,jsx,tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'boomrng-bg-full': "url('/image/boomrng-web-bg.png')",
        'boomrng-bg-lb': "url('/image/boomrng_bg_lb.png')",
        'boomrng-bg-b': "url('/image/boomrng_bg_b.png')",
        'boomrng-bg-r': "url('/image/boomrng_bg_r.png')",
        'boomrng-bg-y': "url('/image/boomrng_bg_y.png')",
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }}
