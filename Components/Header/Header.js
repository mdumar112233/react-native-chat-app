import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native-elements';
import { EvilIcons,MaterialCommunityIcons } from '@expo/vector-icons';


export default function MainHeader() {
    return (
        <View style={styles.container}>
            <Header
            containerStyle={{backgroundColor: '#075e54', height: 65, justifyContent: 'center', borderBottomWidth: 0, paddingHorizontal: 15}}
            leftComponent={ <Text style={{color: 'white', fontSize: 20, width: 100, marginTop: 10}}>WhatsApp</Text> }
            rightComponent={ 
            <View style={{
                flexDirection: 'row',
                width: 60,
                justifyContent: 'space-between',
                marginTop: 13
              }}>
                <EvilIcons style={{marginTop: 2}}  name="search" size={24} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
              </View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // position: 'absolute',
        // top: 50
        // marginTop: 29,
        // backgroundColor: 'yellow'
        // shadowOpacity: 0,
        // borderBottomColor: 'yellow',
        // borderWidth: 2
    }
})
