import React from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import ChatMessage from '../Components/ChatMessage/ChatMessage';
import { Chats } from '../data/Chats';
import bg from '../assets/images/BG.png';
import { ImageBackground } from 'react-native';
import ChatInput from '../Components/ChatInput/ChatInput';

export default function ChatRoomScreen({route, navigation}) {
    // const id = route.params;

    return (
        <View>
            <ImageBackground style={{width: '100%', height: '100%',}} source={bg} >
                <FlatList
                    data = {Chats.messages}
                    renderItem = {({item}) => <ChatMessage Chat={item}/>}
                    keyExtractor={(item => item.id)}
                    inverted
                />
                <ChatInput/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({})
