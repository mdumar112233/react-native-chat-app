import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>This is home screen</Text>
            {/* <Button title='demo' onPress = {() => navigation.navigate('Demo')} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})
