import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import ProfilePicture from './components/ProfilePicture';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoveryScreen from './screens/DiscoveryScreen';
import NotificationScreen from './screens/NotificationScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/Profile';
import SearchBar from 'react-native-vector-icons/AntDesign';
import HomeBar from 'react-native-vector-icons/Foundation';
import PostBar from 'react-native-vector-icons/Feather';
import ProfileBar from 'react-native-vector-icons/Ionicons';
import HeartBar from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                  return  <HomeBar name="home" size={size} color={color} />;
                } 
                if (route.name === 'Discover') {
                  return  <SearchBar name="search1" size={size} color={color} />;
                }
                if (route.name === 'Post') {
                  return  <PostBar name="plus-square" size={size} color={color} />;
                }
                if (route.name === 'Notification') {
                  return  <HeartBar name="hearto" size={size} color={color} />;
                }
                if (route.name === 'Profile') {
                  return  <ProfileBar name="person-circle-outline" size={size} color={color} />;
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: '#000',
              inactiveTintColor: 'black',
            }}   
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;

// https://youtu.be/r7f03VJ8bDE?t=5656
