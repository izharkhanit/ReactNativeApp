'use strict';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 40,
        backgroundColor: '#f5f5f6',
        borderColor: '#d5d6d9',
        borderWidth: 0.5,
        height: 45,
        borderRadius: 4,
        alignSelf: 'stretch',
        paddingHorizontal: 15,
    },
    input: {
        flex: 1,
        color: '#161925',
        fontSize: 20,
    },
    nextBtn: {
        marginTop: 50,
        height: 40,
        width: 100,
        backgroundColor: '#FF3F6C',
        justifyContent: 'center',
        borderRadius: 50,
    },
    nextBtnText: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#ffffff',
        alignSelf: 'center',
    },
    logo: {
        marginTop: 80,
        width: 100,
        height: 100
    },
    infoText: {
        fontSize: 11,
        letterSpacing: 1.5,
        marginTop: 80,
    },
    medium: {
        color: '#161925',
    },
    regular: {
        color: '#94989f',
    },
});

export default styles;