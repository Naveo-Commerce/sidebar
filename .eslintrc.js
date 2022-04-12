module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
      node: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'prettier',
    ],
    ignorePatterns: ['*.svg'],
    overrides: [
      {
        files: ['*.tsx', '*.ts'],
        parserOptions: {
          project: ['./tsconfig.json'], // Specify it only for TypeScript files
        },
        settings: {
          'import/resolver': {
            node: {
              paths: ['src'],
              extensions: ['.ts', '.tsx'],
            },
          },
        },
        extends: [
          'plugin:@typescript-eslint/eslint-recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:prettier/recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:react/jsx-runtime',
        ],
        rules: {
          '@typescript-eslint/no-unused-vars': 2,
          '@typescript-eslint/explicit-function-return-type': 0,
          'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        
          semi: [2, "never"],
          "indent": ["error", 2],
          'func-style': [2, 'expression'],
          'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
          "prettier/prettier": [2, {"singleQuote": true, "parser": "flow", 'semi': false, 'trailingComma': 'all' }]
        },
      },
  
    ],
  };
  