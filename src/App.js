import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import {withAuthenticator} from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

// import Router from "./Router"
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);