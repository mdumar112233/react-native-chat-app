import { StyleSheet } from "react-native";

export const ChatRoomStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: -35
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    userName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    userLastMes: {
        color: '#ddd',
    }
})