import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer} from "@react-navigation/native";
import Router from './Router';

// import Router from "./Router"
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
        <Router />
      </NavigationContainer>
  );
};

export default App;

// https://youtu.be/nBz4k-F9g5E?t=4832
