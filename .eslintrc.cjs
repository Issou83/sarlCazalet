module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: [
    'src/Pages/Admin/**',
    'src/composants/Admin/**',
    'src/composants/Cookies/**',
    'src/composants/NouveauLocations/**',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
  },
}
