import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  {
    ignores: ["dist", "node_modules"],
  },

  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "unused-imports": unusedImports,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // =========================
      // React
      // =========================

      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // =========================
      // React Hooks
      // =========================

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // =========================
      // Unused imports / variables
      // =========================

      "no-unused-vars": "off",

      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // =========================
      // Dead code
      // =========================

      "no-unreachable": "error",

      // =========================
      // Conditions
      // =========================

      "no-constant-condition": "warn",
      "no-constant-binary-expression": "warn",

      // =========================
      // Variables
      // =========================

      "no-redeclare": "error",
      "no-use-before-define": "warn",

      // =========================
      // Console
      // =========================

      "no-console": "warn",
    },
  },
];