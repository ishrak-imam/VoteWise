import 'react-native-gesture-handler'; // For react-navigation gestures
import 'react-native-get-random-values'; // RN polyfill for uuid

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
