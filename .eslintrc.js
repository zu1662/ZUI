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

// vscode set eslint standard setting.json
/** 
{
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
      "javascript",
      "javascriptreact",
      "html",
      "vue"
  ],
  "eslint.options": {
      "extends": ["standard", "plugin:vue/essential"],
      "plugins": ["html", "vue"],
      "parserOptions": {
          "sourceType": "module",
          "parser": "babel-eslint"
      },
      "env": {
          "browser": true,
          "node": true
      },
  },
  "eslint.enable": false
}
*/
// npm install -g

// npm i eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-html babel-eslint -g
