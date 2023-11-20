import pluginN from "eslint-plugin-n";
import * as pluginImport from "eslint-plugin-import";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";
import standard from "eslint-config-standard";

/**
 * @type {import("eslint").Linter.FlatConfig}
 */
export default {
  languageOptions: {
    ecmaVersion: 2022,
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
      document: "readonly",
      navigator: "readonly",
      window: "readonly",
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    sourceType: "module",
  },

  plugins: {
    n: pluginN,
    promise: pluginPromise,
    import: pluginImport,
  },

  rules: {
    ...standard.rules,
    "comma-dangle": ["error", "only-multiline"],
    "indent": ["error", 2],
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
    "curly": "error",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-console": ["error", { allow: ["warn"] }],
    "quote-props": ["error", "consistent"],
  },
};
