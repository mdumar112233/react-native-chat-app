import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../../Screens/ChatScreen';
import Demo from '../../Screens/ChatRoom';
// import HomeStackNavigation from '../StackNavigation/StackNavigation';
import { Entypo } from '@expo/vector-icons';
import CameraScreen from '../../Screens/CameraScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarStyle: {
        backgroundColor: '#075e54',
      },
      tabBarIndicatorStyle: {
        backgroundColor: 'white'
      },
      tabBarLabelStyle: {
        fontWeight: 'bold'
      },
      // tabBarIcon: {focused: true, color: 'gray' }
    }}
    >
      <Tab.Screen  
        name="Camera" 
        component={CameraScreen} 
        options={{
          tabBarIcon: ({color}) => <Entypo name="camera" size={18} color={color} /> ,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            marginTop: 7,
          },
        }}
      />
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Status" component={Demo} />
      <Tab.Screen name="Calls" component={Demo} />
    </Tab.Navigator>
  );
}