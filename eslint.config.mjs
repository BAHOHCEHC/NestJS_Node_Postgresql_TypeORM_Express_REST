// @ts-check
import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    // Ігнори — добре
    ignores: [
      "eslint.config.mjs",
      "dist/**",
      "node_modules/**",
      "*.js",
      "*.mjs",
    ],
  },

  // Базові рекомендовані правила ESLint
  eslint.configs.recommended,

  // Рекомендовані правила для TypeScript (type-checked)
  ...tseslint.configs.recommendedTypeChecked,

  // Prettier — останній, щоб перезаписувати стилі
  eslintPluginPrettierRecommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        // Додаємо ecmaVersion явно — іноді допомагає уникнути "strict mode" помилок
        ecmaVersion: 2022,
      },
    },
  },

  {
    rules: {
      // Вимкнення або послаблення проблемних правил
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unused-vars": "warn", // або "off", якщо заважає
      "@typescript-eslint/no-require-imports": "off",
      // Prettier — вимикаємо parser: "flow" — це була помилка
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: true,
          // Видаляємо parser: "flow" — Prettier сам визначить тип файлу
          semi: true,
          trailingComma: "es5",
          arrowParens: "always",
          printWidth: 100,
          tabWidth: 2,
        },
      ],

      // Додаткові корисні правила для NestJS
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "no-console": "warn",
    },
  },
);
