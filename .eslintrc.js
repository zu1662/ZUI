module.exports = {
  root: true,
  extends: [
    "standard",
    "plugin:vue/essential",
  ],
  plugins: ["html", "vue"],
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint"
  },
  env: {
    browser: true,
  },
}