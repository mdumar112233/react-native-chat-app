import React from 'react'
import { FlatList } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native'
import ChatItem from '../Components/ChatItem/ChatItem'
import NewMessageButton from '../Components/NewMessageButton/NewMessageButton';
import { ChatRooms } from '../data/ChatRooms'

export default function ChatScreen({navigation}) {
    console.log(ChatRooms[0]); 
    return (
        <View style={styles.container}>
            <FlatList
                data={ChatRooms}
                renderItem={({item}) => <ChatItem ChatRoom={item} />}
                keyExtractor={(item => item.id)}
            />
            <NewMessageButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})
