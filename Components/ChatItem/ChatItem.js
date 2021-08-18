import React from 'react'
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Style'

export default function ChatItem(props) {
    const {ChatRoom} = props;

    const user = ChatRoom.users[0];
    // console.log('chatroom info =>', ChatRoom.users[0].imageUri);
    return (
        <View style={styles.container}>
            <View style={styles.chatContainer}>
                <View>
                    <Image source={{uri: user.imageUri}} style={styles.avatar} />
                </View>
                <View style={styles.chatInfo}>
                    <View>
                        <Text>user name</Text>
                        <Text>last chat</Text>
                    </View>
                    <View>
                        <Text>last chat time</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

