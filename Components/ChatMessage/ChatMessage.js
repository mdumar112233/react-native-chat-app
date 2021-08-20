import moment from 'moment';
import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles';

export default function ChatMessage({Chat}) {
    console.log('my chat item', Chat.content);
    const isMyMessage = Chat.user.id === 'u1';
    return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {
                backgroundColor: isMyMessage ? '#DCF8C5': 'white',
                marginLeft: isMyMessage ? 60 : 0,
                marginRight: isMyMessage ? 0 : 60
            }]}>
               {!isMyMessage &&  <Text>{Chat.user.name}</Text>}
                <Text>{Chat.content}</Text>
                <Text>{moment(Chat.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

