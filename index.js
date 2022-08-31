import 'react-native-gesture-handler'; // For react-navigation gestures
import 'react-native-get-random-values'; // RN polyfill for uuid
import 'react-native-reanimated'; // Needed for vision-camera-code-scanner

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Sentry from './src/sentry/setup';
import messaging from '@react-native-firebase/messaging';
import {notificationHandlerBackground} from './src/hooks/useRegisterFCMListeners';

/**
 * This is needed here because in case of a push notification when the android app
 * is in inactive state(killed completely) the app starts in a headless JS mode which
 * only executes the index.js and the application root component remains unmounted.
 */
messaging().setBackgroundMessageHandler(notificationHandlerBackground);

const SentryApp = Sentry.wrap(App);

// Use this to mock data on dev
// if (__DEV__) {
//   require('react-native-url-polyfill/auto');
//   const {native} = require('./mocks/native');

//   native.listen();
// }

AppRegistry.registerComponent(appName, () => SentryApp);
