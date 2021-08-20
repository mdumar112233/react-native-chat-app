import moment from 'moment';
import React from 'react'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function ChatMessage({Chat}) {
    console.log('my chat item', Chat.content);

    return (
        <View>
            <Text>{Chat.user.name}</Text>
            <Text>{Chat.content}</Text>
            <Text>{moment(Chat.createdAt)}</Text>
        </View>
    )
}

