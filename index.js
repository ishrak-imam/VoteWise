import 'react-native-gesture-handler'; // For react-navigation gestures
import 'react-native-get-random-values'; // RN polyfill for uuid

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Sentry from './src/sentry/setup';

const SentryApp = Sentry.wrap(App);

// Use this to mock data on dev
// if (__DEV__) {
//   require('react-native-url-polyfill/auto');
//   const {native} = require('./mocks/native');

//   native.listen();
// }

AppRegistry.registerComponent(appName, () => SentryApp);
