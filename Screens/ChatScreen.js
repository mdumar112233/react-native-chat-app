import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import ChatItem from '../Components/ChatItem/ChatItem'
import { ChatRooms } from '../data/ChatRooms'
// import chatRooms from '../data/ChatRooms';

export default function ChatScreen({navigation}) {
    console.log(ChatRooms[0]); 
    return (
        <View style={styles.container}>
            <Text>Chat screen</Text>
            <ChatItem ChatRoom={ChatRooms[0]} />
            {/* <Button title='demo' onPress = {() => navigation.navigate('Demo')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})
