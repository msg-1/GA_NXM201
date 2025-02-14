import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      quotes: ["error", "double"],
      indent: ["error", 4],
    },
  },
  pluginJs.configs.recommended,
];
