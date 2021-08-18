import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import Demo from '../../Screens/Demo';
import HomeStackNavigation from '../StackNavigation/HomeStackNavigation';

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
      }
    }}
    >
      <Tab.Screen  name="HomePage" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Demo} />
    </Tab.Navigator>
  );
}