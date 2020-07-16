import { AppRegistry } from 'react-native';
import Hello from './HellowWorld';
if (!__DEV__) {
	global.console = {
		log: () => { },
		info: () => { },
		warn: () => { },
		error: () => { }
	}
}
AppRegistry.registerComponent('hello', () => Hello);
