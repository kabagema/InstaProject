/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import ProfilePicture from './components/ProfilePicture';
import HomeScreen from './screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <HomeScreen />
        {/* <ProfilePicture /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
