
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      },
      backgroundImage: {
        BG1: "url('/src/assets/bg1.png')",
      }
    }
  },
  plugins: [require("daisyui")],
}

