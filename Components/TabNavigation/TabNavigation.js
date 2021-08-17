import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigation from '../StackNavigation/HomeStackNavigation';
import UserInfo from '../../Screens/UserInfo';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackNavigation} />
        <Tab.Screen name="Settings" component={UserInfo}/>
      </Tab.Navigator>
  ); 
}