import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchBar from 'react-native-vector-icons/AntDesign';
import HomeBar from 'react-native-vector-icons/Foundation';
import PostBar from 'react-native-vector-icons/Feather';
import ProfileBar from 'react-native-vector-icons/Ionicons';
import HeartBar from 'react-native-vector-icons/AntDesign';

import HomeStackScreen from './home.routes';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import NotificationScreen from '../screens/NotificationScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

const Router = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        if (route.name === 'Home') {
          return <HomeBar name="home" size={size} color={color} />;
        }
        if (route.name === 'Discover') {
          return <SearchBar name="search1" size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return <PostBar name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Notification') {
          return <HeartBar name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return (
            <ProfileBar
              name="person-circle-outline"
              size={size}
              color={color}
            />
          );
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: 'black',
    }}>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Discover" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={PostScreen} />
    <Tab.Screen name="Notification" component={NotificationScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default Router;
