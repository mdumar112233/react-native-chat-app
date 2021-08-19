import moment from 'moment';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { ChatRooms } from '../../data/ChatRooms';
import { styles } from './Style'
import { useNavigation } from '@react-navigation/core';

export default function ChatItem({ChatRoom}) {
    const navigation = useNavigation();

    const user = ChatRoom.users[1];
    // console.log('chatroom info =>', user);

    const onClick = () => {
        console.log('hello');
        navigation.navigate('ChatRoom', {
            id: ChatRoom.id
        })
    }


    return (
        <TouchableWithoutFeedback onPress={onClick}>
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
                            <Text style={styles.lastChatTime}>{moment(ChatRoom.lastMessage.createdAt).format("DD/MM/YY")}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

