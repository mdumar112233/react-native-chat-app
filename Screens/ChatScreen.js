import React from 'react'
import { FlatList } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native'
import ChatItem from '../Components/ChatItem/ChatItem'
import { ChatRooms } from '../data/ChatRooms'
// import chatRooms from '../data/ChatRooms';

export default function ChatScreen({navigation}) {
    console.log(ChatRooms[0]); 
    return (
        <View style={styles.container}>
            {/* <ChatItem ChatRoom={ChatRooms[0]} /> */}
            <FlatList
                data={ChatRooms}
                renderItem={({item}) => <ChatItem ChatRoom={item} />}
                keyExtractor={(item => item.id)}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})
