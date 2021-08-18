import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Components/TabNavigation/TabNavigation';
import HomeStackNavigation from './Components/StackNavigation/HomeStackNavigation';
import Header from './Components/Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      {/* <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer> */}
 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
