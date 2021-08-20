import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import ChatMessage from '../Components/ChatMessage/ChatMessage';
import { Chats } from '../data/Chats';

export default function ChatRoomScreen({route, navigation}) {
    const id = route.params;
    console.log('main chat info',Chats);
    return (
        <View>
            <Text>Chat room</Text>
            <FlatList
                data = {Chats.messages}
                renderItem = {({item}) => <ChatMessage Chat={item}/>}
                keyExtractor={(item => item.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
