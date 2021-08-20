import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from './Styles'
import { FontAwesome5, Entypo, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function ChatInput() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 style={{marginRight: 5}} name="laugh-beam" size={24} color="gray" />
                <TextInput style={styles.textInput} multiline/>
                <Entypo name="attachment" size={24} color="gray" />
                <Fontisto style={{marginHorizontal: 5}} name="camera" size={20} color="gray" />
            </View>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="microphone" size={24} color="white" />
            </View>
        </View>
    )
}

