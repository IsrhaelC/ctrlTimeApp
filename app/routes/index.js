import Home from '../views/Home'
import Login from '../views/Login'
import Signup from '../views/Signup'
import Splash from '../views/Splash'
import TimeSheet from '../views/TimeSheet'

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Splash: {
    screen: TimeSheet,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  TimeSheet: {
    screen: TimeSheet,
    navigationOptions: {
      header: null
    }
  }
});

export default { StackNavigator };