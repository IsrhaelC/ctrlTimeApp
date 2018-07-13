import { AppRegistry } from 'react-native';
import Navigator from './app/routes';

export const App = Navigator.StackNavigator;

AppRegistry.registerComponent('ctrlTimeApp', () => App);
