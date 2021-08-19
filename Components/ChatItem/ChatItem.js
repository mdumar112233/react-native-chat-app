import React from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { ChatRooms } from '../../data/ChatRooms';
import { styles } from './Style'

export default function ChatItem(props) {
    const {ChatRoom} = props;

    const user = ChatRoom.users[1];
    console.log('chatroom info =>', user);
    return (
        <View style={styles.container}>
            <View style={styles.chatContainer}>
                <View>
                    <Image source={{uri: user.imageUri}} style={styles.avatar} />
                </View>
                <View style={styles.chatInfo}>
                    <View>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.lastText}>{ChatRoom.lastMessage.content.substring(0, 15)}...</Text>
                    </View>
                    <View>
                        <Text style={styles.lastChatTime}>yesterday</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

