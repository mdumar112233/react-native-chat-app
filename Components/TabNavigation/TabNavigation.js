import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../../Screens/ChatScreen';
import Demo from '../../Screens/ChatRoomScreen';
// import HomeStackNavigation from '../StackNavigation/StackNavigation';
import { Entypo } from '@expo/vector-icons';
import CameraScreen from '../../Screens/CameraScreen';
import StatusScreen from '../../Screens/StatusScreen';
import CallScreen from '../../Screens/CallScreen';

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
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallScreen} />
    </Tab.Navigator>
  );
}