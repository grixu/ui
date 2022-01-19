"use strict"

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended"
  ],
  ignorePatterns: ["dist/**/*", "coverage/**/*", "types/**/*"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "prettier/prettier": [
      "warn",
      {
        semi: false,
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "es5",
        singleQuote: false,
        bracketSameLine: true,
        quoteProps: "consistent",
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "lf",
      },
    ],
  },
  overrides: [
    {
      files: ["**/tests/*.{j,t}s?(x)", "**/tests/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
}
