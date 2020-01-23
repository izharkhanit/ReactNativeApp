/* Styles is the folder where your global styles, themes,svg,custom icons, and mixins will go */

'use strict';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    housesContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    propertContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        top: 0,
    },
    infoText: {
        fontSize: 11,
        letterSpacing: 1.5,
        marginTop: 0,
    },
    scrollView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    image: {
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height) - 500,
    },

    textImage: {
        color: 'black',
        backgroundColor: 'white',
        width: 184,
        height: 60,
        marginTop: -50,
        marginLeft: 10,
        padding: 15,
        borderColor: '#d5d6d9',
        borderWidth: 0.5,
    },
    filterIcon: {
        position: 'absolute',
        right: 30,
        top: 50,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 150,
        top: 150,
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
    view: {
        marginTop: 0,
        width: width - 230,
        height: 160,
        margin: 10,
    },
});

export default GlobalStyles;