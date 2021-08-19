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
            title: route.params.name,
            headerLeft: () => (
              <View style={ChatRoomStyles.container}>
                <AntDesign onPress={navigation.goBack} name="arrowleft" size={24} color="white" />
                <Image source={{uri: }}/>
              </View>
            )
          })}
        />
      </Stack.Navigator>
  );
}

export default StackNavigation;