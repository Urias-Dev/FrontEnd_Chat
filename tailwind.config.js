/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:  {

       backgroundImage: {

         'img_login'  : "url('/public/assets/img_login.svg')"

        }
    },
  },
  plugins: [],
}
