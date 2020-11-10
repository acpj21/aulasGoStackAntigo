import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

export default (signedIn = false) =>
createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
      }),
      App: createBottomTabNavigator({
        Dashboard,
      }),
  },
  {
    initialRouteName: signed ? 'App' : 'Sign'
  }
  )
);
