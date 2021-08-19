import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    chatContainer: {
        flexDirection: 'row',
    },
    chatInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        paddingHorizontal: 10,
        marginTop: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lastText: {
        fontSize: 16,
        color: 'gray'
    },
    lastChatTime: {
        fontSize: 16,
        color: 'gray'
    }

})
