import * as React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import Demo from '../../Screens/Demo';
import HomeStackNavigation from '../StackNavigation/HomeStackNavigation';
import { Entypo } from '@expo/vector-icons';

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
      }
    }}
    >
      <Tab.Screen  
        name="Camera" 
        component={HomeScreen} 
        options={{
          tabBarIcon: () => <Entypo name="camera" size={18} color="white" />,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            marginTop: 7
          }
          
        }}
      />
      <Tab.Screen initialRoute="Chats" component={Demo} />
      <Tab.Screen name="Status" component={Demo} />
      <Tab.Screen name="Calls" component={Demo} />
    </Tab.Navigator>
  );
}