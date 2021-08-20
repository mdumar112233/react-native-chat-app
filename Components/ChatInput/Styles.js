import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        flex: 1,
        alignItems: 'center'
    },
    textInput: {
        flex: 1
    },  
        buttonContainer: {
        backgroundColor: '#075e54',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    }
})
