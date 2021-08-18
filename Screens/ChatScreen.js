import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function ChatScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Chat screen</Text>
            {/* <Button title='demo' onPress = {() => navigation.navigate('Demo')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})
