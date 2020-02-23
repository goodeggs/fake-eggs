module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:goodeggs/recommended',
    'plugin:goodeggs/typescript',
  ],
  env: {
    node: true,
  },
};
