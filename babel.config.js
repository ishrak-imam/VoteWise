module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@polkadotApi': './src/polkadotApi',
          '@context': './src/context',
          '@service': './src/service',
          '@hooks': './src/hooks',
          '@atoms': './src/atoms',
          '@navigation': './src/navigation',
          '@ui': './src/ui',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
