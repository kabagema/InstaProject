import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Camera from 'react-native-vector-icons/Feather';
import Paper from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';
import logo from '../assets/images/logo.png';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        // title: 'Instagram',
        headerLeftContainerStyle: {
          marginLeft: 10,
        },
        headerRightContainerStyle: {
          marginRight: 10,
        },
        headerLeft: () => <Camera name="camera" size={25} color={'#000'} />,
        headerTitle: () => (
          <Image source={logo} resizeMode="contain" style={{width: 125, height: 50}} />
        ),
        headerRight: () => (
          <Paper name="paper-plane-outline" size={27} color={'#000'} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;

// Day 2 done