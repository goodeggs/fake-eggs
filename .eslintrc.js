module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:goodeggs/recommended',
    'plugin:goodeggs/typescript',
    'plugin:goodeggs/jest',
  ],
  env: {
    node: true,
  },
};
