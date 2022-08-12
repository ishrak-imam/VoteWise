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
          '@screens': './src/screens'
        },
      },
    ],
  ]
};
