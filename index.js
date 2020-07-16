/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/HellowWorld';
import { name as appName } from './app.json';

require('./src');
AppRegistry.registerComponent(appName, () => App);
