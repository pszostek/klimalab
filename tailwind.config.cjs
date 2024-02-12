const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0f5fe',
          '100': '#dee9fb',
          '200': '#c4daf9',
          '300': '#9cc1f4',
          '400': '#6ca0ee',
          '500': '#4a7fe7',
          '600': '#406add',
          '700': '#2c4ec9',
          '800': '#2a40a3',
          '900': '#273a81',
          '950': '#1c264f',
      },
      
      }
    }
  }
};

module.exports = config;