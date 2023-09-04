/** @type {import('tailwindcss').Config} */
module.exports = {

  extend: {
    fontFamily: {
      Poppins: ['Poppins', 'sans'],
    },
   
    // ... other configurations
  },
  content: [
    "./componets/**/*.{ts,tsx,js,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
     "./pages/**/*.{ts,tsx,js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    
    
    
  },

  plugins: [
   
  ],
}

