'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#ffffff',
        top: 0,
    },
    scrollViewHouses: {
        overflow: 'visible',
        marginTop: 20,
    },
    propertImage: {
        width: width - 30,
        height: 480,
        marginLeft: 20,
    },
    propertyType: {
        color: 'black',
        fontSize: 25,
        marginLeft: 20,
        marginTop: 20,
    },
    propertyPrice: {
        color: 'grey',
        fontSize: 20,
        alignSelf: 'flex-end',
        marginBottom: 45,
    },

    view: {
        marginTop: 0,
        width: (Dimensions.get('window').width / 2) - 20,
        height: (Dimensions.get('window').width / 2) - 20,
        margin: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 2,
    },
    paymentView: {
        marginTop: 0,
        width: (Dimensions.get('window').width) - 20,
        height: (Dimensions.get('window').width) - 20,
        margin: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 2,
    },
    navBarContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    navBar: {
        flex: 1,
        flexDirection: 'row',
    },
    nearByBar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    navBarImage: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end',
    },
    navBarTextOne: {
        color: 'grey',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    navBarTextTwo: {
        color: '#71a6d4',
        fontSize: 20,
        marginLeft: 20,
    },
    navBarTextThree: {
        color: 'grey',
        fontSize: 10,
        marginLeft: 20,
        top: -20,
    },
    navBarView: {
        width: 50,
        height: 50,
        margin: 10,
        backgroundColor: 'white',
    },
    nearByBarView: {
        width: 60,
        height: 60,
        margin: 20,
        backgroundColor: 'white',
    },
    buttonType: {
        height: 40,
        margin: 20,
        backgroundColor: '#f2f2f2',
    },
});

export default styles;