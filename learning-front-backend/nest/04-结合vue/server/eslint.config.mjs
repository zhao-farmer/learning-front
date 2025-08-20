// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // 关闭结尾prettier判断
      'prettier/prettier': ['error', { endOfLine: 'auto', "singleQuote": 'auto',"parser": "flow" }],
      // 为引用不再是错误而是警告
      "@typescript-eslint/no-unused-vars": "warn",
      // 参数类型，也进行警告
      "@typescript-eslint/no-unsafe-call": "off",
      // 对象. 这种不安全的设置
      "@typescript-eslint/no-unsafe-assignment": "off",
      // 关闭
      "@typescript-eslint/no-unsafe-member-access": "off",

      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn'
    },
  },
);