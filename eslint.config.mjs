import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get the current directory of the file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat with the current directory
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ESLint flat config
export default [
  compat.extends("eslint:recommended"),
  compat.extends("next/core-web-vitals"),
  {
    // Optionally define parser options or other settings here
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
    },
  },
];
