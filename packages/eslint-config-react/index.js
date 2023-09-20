module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@moaqz/eslint-config"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  settings: {
    react: {
      version: "18"
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
