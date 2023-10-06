module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:unicorn/all",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "prettier.config.cjs"],
  overrides: [
    {
      files: ["*.test.*"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/all"],
      rules: {
        "vitest/prefer-lowercase-title": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "@tanstack/query"],
  rules: {
    "no-console": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-keyword-prefix": "off",
  },
  settings: { react: { version: "detect" } },
};
