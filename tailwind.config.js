/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    //...
    daisyui: {
      themes: ["light", "dark", "cupcake"],
    },
  }
  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('Images/2.png')",
          'footer-texture': "url('Images/4.png')",
        }
      }
    }
  }