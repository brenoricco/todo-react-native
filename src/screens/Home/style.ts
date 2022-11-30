import { StyleSheet } from "react-native";
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#1A1A1A',
        margin: 0,
        padding: 0,
        position: 'relative', 
        paddingBottom: '50%',
        height: '100%'
    },
    header: {
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 60,
        position: 'absolute',
        height: 173,
        left: 0,
        right: 0,
        top: 0,
    },
    logo: {
        marginTop: 42,
        width: 110,
        height: 32
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 24,
        position: 'absolute',
        height: 54,
        top: 142,
    },
    input: {
        backgroundColor: '#262626',
        height: 54,
        flex: 1,
        padding: 16,
        borderRadius: 6,
        color: '#808080'     
    },
    button: {
        backgroundColor: '#1E6F9F',
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        padding: 12,
        marginLeft: 4
    },
    imgButton: {
        height: 16,
        width: 16
    },
    todos: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 24,
        paddingBottom: 24,
        paddingTop: 24,
        position: 'absolute',
        justifyContent: 'center',
        top: 190,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingTop: 10
    },
    counts: {
        flexDirection: 'row',
    },
    count: {
        backgroundColor: '#262626',
        color: '#D9D9D9',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 50,
        fontSize: 12,
        fontWeight: "700",
        marginLeft: 8
    },
    created: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#4EA8DE'
    },
    done: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#8284FA'
    },
    emptyList: {
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#333333',
    },
    imgEmptyList: {
        tintColor: "#808080",
        width: 56,
        height: 56
    },
    emptyTexts: {
        marginTop: 16,
    },
    emptyText: {
        color: '#808080'
    },
    emptyTextBold: {
        fontWeight: 'bold',
        color: '#808080'
    },
});