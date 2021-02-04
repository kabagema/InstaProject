import 'react-native-gesture-handler';

import React from 'react';
import { Image, StatusBar } from 'react-native';

import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';
import NotificationScreen from './screens/NotificationScreen';
import PostScreen from './screens/PostScreen';
import ProfileScreen from './screens/Profile';
import logo from "./assets/images/logo.png"

import Paper from 'react-native-vector-icons/Ionicons';
import SearchBar from 'react-native-vector-icons/AntDesign';
import HomeBar from 'react-native-vector-icons/Foundation';
import PostBar from 'react-native-vector-icons/Feather';
import ProfileBar from 'react-native-vector-icons/Ionicons';
import HeartBar from 'react-native-vector-icons/AntDesign';
import Camera from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
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
          headerLeft: () => (          
            <Camera name="camera" size={25} color={'#000'} />  
          ),
          headerTitle: () => (
            <Image source={logo} resizeMode="contain" style={{width: 125}} />
          )
          ,
          headerRight: () => (
            <Paper name="paper-plane-outline" size={27} color={'#000'} />
          )
        }}
        />
    </HomeStack.Navigator>
  );
}

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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discover" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;

// https://youtu.be/nBz4k-F9g5E?t=4832
