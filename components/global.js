import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLogo: {
        flex: 4,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    imageButton: {
        flex: 1,
        height: 150,
        borderRadius: 20,
    },
    foodImage: {
        padding: 150,
        alignSelf: 'center',
        height: 200,
        width: 200,
        borderRadius: 200,
        margin: 20
    },

    listItemText: {
        padding: 40,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        fontSize: 18,
    },
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#8dd289', //Green
    },
    anchorText: {

        padding: 8,
        justifyContent: 'center',
        alignSelf: "flex-start",
        marginBottom: 32,
        marginLeft: -2,
        fontFamily: 'Roboto-Bold',
        backgroundColor: '#f2f2f2',
        color: 'grey',
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    },
});
