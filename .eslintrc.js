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
          {
            name: '@ui/library',
            importNames: ['Snackbar'],
            message:
              'Please use useSnackbar from context/SnackbarContext instead.',
          },
          {
            name: '@testing-library/react-native',
            message: 'Please use src/utils/testUtils instead',
          },
        ],
      },
    ],
    'react/no-unstable-nested-components': 'error',
    '@typescript-eslint/no-shadow': 'error',
    'react-native/no-unused-styles': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
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
