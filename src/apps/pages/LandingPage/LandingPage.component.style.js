'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
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
    scrollViewHouses: {
        overflow: 'visible',
        marginBottom: 40,
        marginTop: 20,
    },
    propertImage: {
        width: width - 30,
        height: 180,
    },
    propertyType: {
        color: 'black',
        fontSize: 25,
        paddingBottom: 8,
    },
    propertyPrice: {
        color: 'grey',
        fontSize: 20,
        alignSelf: 'flex-end',
        marginBottom: 45,
    },
    searchIcon: {
        padding: 8,
        color: 'grey',
    },
    filterIcon: {
        position: 'absolute',
        right: 30,
        top: 50,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        color: 'white',
    },
    view: {
        marginTop: 0,
        width: width - 230,
        height: 160,
        margin: 10,
    },
    fetchView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textSize: {
        fontSize: 10,
    },
    textColor: {
        color: '#71a6d4',
    },


});

export default styles;