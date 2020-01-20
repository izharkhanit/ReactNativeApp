import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
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

    infoText: {
        fontSize: 11,
        letterSpacing: 1.5,
        marginTop: 0,
    },
    medium: {
        color: '#161925',
    },
    regular: {
        color: '#94989f',
    },
    scrollView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    scrollViewHouses: {
        overflow: 'visible',
        marginBottom: 40,
        marginTop: 20,
    },
    image: {
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height) - 500,
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
    view: {
        marginTop: 0,
        width: width - 230,
        height: 160,
        margin: 10,
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
    }


});

export { styles }

// refactor to import on landingPage as well as other if needed