import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 8,
        fontSize: 14,
        flex: 1,
        flexGrow: 1,
    },
    checkbox: {
        borderRadius: 100,
        margin: 8,
        width: 20,
        height: 20,
    },
    checkmark: {
        fontSize: 8
    },
    trash: {
        tintColor: '#808080',
        width: 36,
        height: 36
    },
});