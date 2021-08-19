import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/ChatScreen';
import { EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import TabNavigation from '../TabNavigation/TabNavigation';
import ChatRoomScreen from '../../Screens/ChatRoomScreen';
import { ChatRoomStyles } from './ChatRoomStyles';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';

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
        <Stack.Screen 
          name="ChatRoom" 
          component={ChatRoomScreen} 
          options= {({route, navigation}) => ({
            headerBackImage: false,
            headerLeft: () => (
              <View style={ChatRoomStyles.container}>
                <Image style={ChatRoomStyles.image} source={{uri: route.params.image}}/>
              </View>
            ),
            headerTitle: () => (
              <View>
                <Text style={ChatRoomStyles.userName}>{route.params.name}</Text>
                <Text style={ChatRoomStyles.userLastMes}>{route.params.lastMessage.substring(0,10)}...</Text>
              </View>
            )

          })}
        />
      </Stack.Navigator>
  );
}

export default StackNavigation;