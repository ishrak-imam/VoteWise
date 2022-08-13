module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native',
            importNames: ['SafeAreaView'],
            message: 'Use react-native-safe-area-context instead.',
          },
          {
            name: 'react-native-paper',
            importNames: ['useTheme'],
            message: 'Import useTheme from @ui/library instead.',
          },
          {
            name: '@react-navigation/native',
            importNames: ['useTheme'],
            message: 'Import useTheme from @ui/library instead.',
          },
          {
            name: '@polkadot/util-crypto',
            message: 'Use @polkadotApi/useCryptoUtil instead.',
          },
        ],
      },
    ],
    'react/no-unstable-nested-components': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
