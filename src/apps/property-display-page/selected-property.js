import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import { Button, Card, Title, Paragraph } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');
const hairline = StyleSheet.hairlineWidth;
export default class SelectedProperty extends Component {

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
    }

    componentDidMount() {
        // Animation sliding image
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

    render() {
        const { images } = this.state;
        return (
            <>
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
                                </ImageBackground>

                            )
                        })
                        }
                    </ScrollView>

                    <View style={styles.navBarContainer}>
                        <View style={styles.navBar}>
                            <Text style={styles.navBarTextOne}>Grand Blue Tower</Text>
                            <View style={styles.navBarImage}>
                                <TouchableOpacity onPress={this.handlecommunityFilterPress}>
                                    <Image source={require('../../../assets/uploadIcon.png')} style={styles.navBarView} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.handlecommunityFilterPress}>
                                    <Image source={require('../../../assets/circleIcon.png')} style={styles.navBarView} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <Text style={styles.navBarTextThree}>AL-TH-3700-3290</Text>
                        <Text style={styles.navBarTextTwo}>AED 4,750,000</Text>
                    </View>

                    <View style={styles.housesContainer}>
                        <ScrollView
                            style={styles.scrollViewHouses}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                        >
                            <View style={styles.view} />
                            <View style={styles.view} />
                        </ScrollView>
                        <ScrollView
                            style={styles.scrollViewHouses}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                        >
                            <View style={styles.view} />
                            <View style={styles.view} />
                        </ScrollView>
                        <ScrollView
                            style={styles.scrollViewHouses}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                        >
                            <View style={styles.view} />
                            <View style={styles.view} />
                        </ScrollView>

                    </View>
                    <Card>
                        <Card.Content>
                            <Paragraph>Take a stroll down the boulevard and arrive at the dazzling Dubai Creek Tower. Hit the main road and reach Downtown Dubai and Dubai International Airport in just 10-15 minutes. With thoughtful road planning and a dedicated metro station, getting across Dubai is nothing short of smooth sailing.</Paragraph>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Title>Near By</Title>
                        </Card.Content>
                    </Card>
                    <View style={styles.nearByBar}>
                        <FontAwesomeIcon name="coffee" style={styles.nearByBarView} size={50} color="grey" />
                        <MaterialCommunityIcons name="human-male-boy" style={styles.nearByBarView} size={50} color="grey" />
                        <MaterialCommunityIcons name="lock-plus" style={styles.nearByBarView} size={50} color="grey" />
                        <FontAwesome5 name="child" style={styles.nearByBarView} size={50} color="grey" />
                    </View>

                    <Card>
                        <Card.Content>
                            <Title>Amenities</Title>
                        </Card.Content>
                    </Card>
                    <View style={styles.housesContainer}>
                        <ScrollView
                            style={styles.scrollViewHouses}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                        >
                            <View style={styles.view} />
                            <View style={styles.view} />
                        </ScrollView>
                        <ScrollView
                            style={styles.scrollViewHouses}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                        >
                            <View style={styles.view} />
                            <View style={styles.view} />
                        </ScrollView>
                    </View>

                    <View style={styles.propertContainer}>
                        <Text style={styles.propertyType}>
                            Floor Plan
                       </Text>
                        <Image source={require('../../../assets/floorPlan.png')} style={styles.propertImage} />
                    </View>

                    <Card>
                        <Card.Content>
                            <Title>Payment Plan</Title>
                        </Card.Content>
                    </Card>
                    <View style={styles.propertContainer}>
                        <View style={styles.paymentView} />
                    </View>
                    <View style={styles.propertContainer}>
                        <Button style={styles.buttonType} mode="outlined" color="black" uppercase={false} onPress={() => console.log('Pressed')}>
                            Sales Offer
                </Button>
                        <Button style={styles.buttonType} icon="upload" mode="outlined" color="black" uppercase={false} onPress={() => console.log('Pressed')}>
                            Share
                </Button>

                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <Button style={styles.buttonType} mode="outlined" color="black" uppercase={false} onPress={() => console.log('Pressed')}>
                        Book Now
             </Button>
                </View>
            </>
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
    buttonContainer: {
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
        marginTop: 20,
    },
    image: {
        width: Dimensions.get('window').width,
        height: (Dimensions.get('window').height) - 500,
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
    buttonType: {
        height: 40,
        margin: 20,
        backgroundColor: '#f2f2f2',

    },


});


