module.exports = {
  content: ["./src/**/*.{vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#00669B",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./src/**/*.vue'],
    options: {
      keyframes: true
    }
  }
}
