/** @type {import('tailwindcss').Config} */
module.exports = {

  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans'],
      serif: ['Poppins', 'serif'],
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

