import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './Styles';

export default function NewMessageButton() {
    return (
        <View style={styles.container}>
            <MaterialIcons name="message" size={24} color="white" />
        </View>
    )
}

