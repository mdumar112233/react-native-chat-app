import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ChatRoomScreen({route}) {
    const id = route.params;
    console.log(id);
    return (
        <View>
            <Text>Chat room</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
