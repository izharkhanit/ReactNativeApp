import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');
export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            images: [
                require('../../../assets/img-1.jpg'),
                require('../../../assets/img-2.jpg'),
                require('../../../assets/img-3.jpg'),
                require('../../../assets/img-4.jpg'),
                require('../../../assets/img-5.jpg')
            ]
        };
        this.handlecommunityFilterPress = this.handlecommunityFilterPress.bind(this);
        this.selectedPropertyPress = this.selectedPropertyPress.bind(this);
    }

    componentDidMount() {
        // Animation sliding
        const numOfBackground = 5;
        let scrollValue = 0, scrolled = 0;
        setInterval(function () {
            scrolled++;
            if (scrolled < numOfBackground)
                scrollValue = scrollValue + width;
            else {
                scrollValue = 0;
                scrolled = 0
            }
            _scrollView.scrollTo({ x: scrollValue, animated: false })

        }, 3000);
        _scrollViewApp.scrollTo({ animated: false })
    }

    handlecommunityFilterPress() {
        this.props.navigation.navigate('Search', {
            query: this.state.text,
        });
    }
    selectedPropertyPress() {
        this.props.navigation.navigate('SelectedProperty', {
            query: this.state.text,
        });
    }

    render() {
        const { images } = this.state;
        return (
            <ScrollView ref={(scrollView) => { _scrollViewApp = scrollView; }}>
                <ScrollView
                    style={styles.scrollView}
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={true}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}
                >

                    {images.map((image, i) => {
                        return (
                            <ImageBackground source={image} {...this.props} style={styles.image} >
                                <FontAwesomeIcon onPress={this.handlecommunityFilterPress} name="plus-square-o" style={styles.filterIcon} size={42} color="white" />
                                <View style={styles.inputContainer}>
                                    <IonIcon name="ios-search" style={styles.searchIcon} size={24} color="grey" />
                                    <TextInput
                                        placeholder="Communities or Properties"
                                        underlineColorAndroid={'transparent'}
                                        style={styles.input}
                                        onChangeText={text => this.setState({ text })}
                                        value={this.state.text}
                                    />
                                    <FontAwesome5 onPress={this.handlecommunityFilterPress} name="sliders-h" style={styles.searchIcon} size={24} color="grey" />
                                </View>
                            </ImageBackground>
                        )
                    })
                    }
                </ScrollView>
                <View style={styles.housesContainer}>
                    <ScrollView
                        style={styles.scrollViewHouses}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        decelerationRate={0}
                        snapToInterval={width - 60}
                        snapToAlignment={"center"}
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }}>
                        {/* When getting the json data, loop and reuse the separate component */}
                        <View>
                            <Image source={require('../../../assets/img-1.jpg')} style={styles.view} />
                            <Text style={styles.textImage}>
                                Beach Front
                       </Text>
                        </View>
                        <View>
                            <Image source={require('../../../assets/img-4.jpg')} style={styles.view} />
                            <Text style={styles.textImage}>
                                The Valley Eden
                       </Text>
                        </View>
                        <View>
                            <Image source={require('../../../assets/img-3.jpg')} style={styles.view} />
                            <Text style={styles.textImage}>
                                Mina Rashid
                       </Text>
                        </View>
                        <View>
                            <Image source={require('../../../assets/img-2.jpg')} style={styles.view} />
                            <Text style={styles.textImage}>
                                Dubai Hills Estate
                       </Text>
                        </View>
                        <View>
                            <Image source={require('../../../assets/img-5.jpg')} style={styles.view} />
                            <Text style={styles.textImage}>
                                South
                       </Text>
                        </View>
                        {/**END**  When getting the json data, loop and reuse the separate component */}
                    </ScrollView>

                    {/* property list, refactor this to import from separate component and reuse here */}
                    {/* separate component already clreated PropertyDisplayPage */}
                    <ScrollView
                        showsVerticalScrollIndicator={false}

                    >
                        {/* when fetching data from web services refactor this, from scrollView to flatList
                        and make custom component and reuse the below view with data length
                        first 4 then while scrolling load more */}
                        <View style={styles.propertContainer}>
                            <Text style={styles.propertyType}>
                                Studio
                       </Text>
                            <TouchableOpacity onPress={this.selectedPropertyPress}>
                                <Image source={require('../../../assets/img-1.jpg')} style={styles.propertImage} />
                            </TouchableOpacity>
                            <FontAwesome5 name="star" style={styles.filterIcon} size={30} color="white" />

                            <Text style={styles.propertyPrice}>
                                <Text style={{ fontSize: 10 }}>From </Text>AED <Text style={{ color: '#71a6d4' }}>4,750,000</Text>
                            </Text>
                        </View>
                        <View style={styles.propertContainer}>
                            <Text style={styles.propertyType}>
                                1 Bedroom
                       </Text>
                            <TouchableOpacity onPress={this.selectedPropertyPress}>
                                <Image source={require('../../../assets/img-2.jpg')} style={styles.propertImage} /></TouchableOpacity>
                            <FontAwesome5 name="star" style={styles.filterIcon} size={30} color="white" />

                            <Text style={styles.propertyPrice}>
                                <Text style={{ fontSize: 10 }}>From </Text>AED <Text style={{ color: '#71a6d4' }}>4,750,000</Text>
                            </Text>
                        </View>
                        <View style={styles.propertContainer}>
                            <Text style={styles.propertyType}>
                                2 Bedroom
                       </Text>
                            <TouchableOpacity onPress={this.selectedPropertyPress}>
                                <Image source={require('../../../assets/img-3.jpg')} style={styles.propertImage} /></TouchableOpacity>
                            <FontAwesome5 name="star" style={styles.filterIcon} size={30} color="white" />

                            <Text style={styles.propertyPrice}>
                                <Text style={{ fontSize: 10 }}>From </Text>AED <Text style={{ color: '#71a6d4' }}>4,750,000</Text>
                            </Text>
                        </View>
                        <View style={styles.propertContainer}>
                            <Text style={styles.propertyType}>
                                3 Bedroom
                       </Text>
                            <TouchableOpacity onPress={this.selectedPropertyPress}>
                                <Image source={require('../../../assets/img-4.jpg')} style={styles.propertImage} />
                            </TouchableOpacity>
                            <FontAwesome5 name="star" style={styles.filterIcon} size={30} color="white" />

                            <Text style={styles.propertyPrice}>
                                <Text style={{ fontSize: 10 }}>From </Text>AED <Text style={{ color: '#71a6d4' }}>4,750,000</Text>
                            </Text>
                        </View>
                        {/* Refactor end */}
                    </ScrollView>

                </View>
            </ScrollView>

        );
    }
}

// Refactor import from styles.js after creating another file
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


