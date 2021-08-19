import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function ChatRoomScreen({route, navigation}) {
    const id = route.params;
    console.log(id);
    return (
        <View>
            <Text>Chat room</Text>
            <Button title='button' onPress={navigation.goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({})
