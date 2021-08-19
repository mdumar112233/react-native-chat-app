import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/ChatScreen';
import { EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import TabNavigation from '../TabNavigation/TabNavigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#075e54',
        },
        headerTintColor: '#fff',
      }}>
        <Stack.Screen 
          name="HomeScreen" 
          options={{
            title :'WhatsApp',
            headerRight: () => (
              <View style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-between'
              }}>
                <EvilIcons name="search" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
              </View>
            ),
            headerShadowVisible: false
          }}
          component={TabNavigation} 
        />
        {/* <Stack.Screen name="Demo" component={Demo} /> */}
      </Stack.Navigator>
  );
}

export default StackNavigation;