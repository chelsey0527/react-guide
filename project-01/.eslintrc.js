module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'parser': 'babel-eslint',
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 'off',
    'camelcase': 'off',
    'require-jsdoc': 'off', // 函式前註解
    'max-len': 'off', // 最大長度限制
    'new-cap': 'off', // 函式首字小寫
    'prefer-const': 'off',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
};
