/* eslint-disable @typescript-eslint/no-var-requires */
const {defaults: tsjPreset} = require('ts-jest/presets');

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  ...tsjPreset,
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest/setupAfterEnv.ts'],
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@gorhom|@babel/runtime/helpers/esm/)',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@ui/(.*)$': '<rootDir>/src/ui/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@service/(.*)$': '<rootDir>/src/service/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@atoms/(.*)$': '<rootDir>/src/atoms/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@polkadotApi/(.*)$': '<rootDir>/src/polkadotApi/$1',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  verbose: true,
};

module.exports = config;
