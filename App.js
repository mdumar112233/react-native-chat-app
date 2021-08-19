import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Components/TabNavigation/TabNavigation';
import MainHeader from './Components/Header/Header';
import StackNavigation from './Components/StackNavigation/StackNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainHeader/> */}
      <NavigationContainer>
        {/* <TabNavigation/> */}
        <StackNavigation/>
      </NavigationContainer>
 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
