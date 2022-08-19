import 'react-native-gesture-handler'; // For react-navigation gestures
import 'react-native-get-random-values'; // RN polyfill for uuid

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Sentry from './src/sentry/setup';

const SentryApp = Sentry.wrap(App);

AppRegistry.registerComponent(appName, () => SentryApp);
