module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#00669B",
      },
    },
  },
  plugins: [],
  purge: [
    './src/**/*.vue'
  ]
}
