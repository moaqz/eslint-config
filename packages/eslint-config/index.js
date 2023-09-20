module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["import", "n", "promise"],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    indent: ["error", 2],
    "no-floating-decimal": "error",
    "no-var": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "no-await-in-loop": "error",
    "prefer-template": "error",
    "no-sequences": "error",
    "prefer-const": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    curly: "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
