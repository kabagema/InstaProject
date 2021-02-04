import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import bottomHomeNavigator from './bottomHomeNavigation.routes';
import StoryScreen from '../screens/StoryScreen';

const Tab = createBottomTabNavigator();
// const BottomTabNavigator = createBottomTabNavigator = ()

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={"Home"} component={bottomHomeNavigator} 
    options={{
      headerShown: false
    }}/>
    <RootStack.Screen name={"Story"} component={StoryScreen} 
      options={{
        headerShown: false
    }}/>

  </RootStack.Navigator>
);

export default Router;
