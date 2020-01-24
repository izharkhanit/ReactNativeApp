'use strict';

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

import styles from './SelectedPropertyDisplay.component.style';
import GlobalStyles from '../../styles/global.style'

import { Button, Card, Title, Paragraph } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');
const hairline = StyleSheet.hairlineWidth;
var scrollerView = () => { };
var scrollerViewApp = () => { };

export default class SelectedPropertyDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            images: [
                require('../../../../assets/img-1.jpg'),
                require('../../../../assets/img-2.jpg'),
                require('../../../../assets/img-3.jpg'),
                require('../../../../assets/img-4.jpg'),
                require('../../../../assets/img-5.jpg')
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
            if (scrollerView) {
                scrollerView.scrollTo({ x: scrollValue, animated: false });
            }

        }, 3000);
        if (scrollerViewApp) {
            scrollerViewApp.scrollTo({ animated: false });
        }
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
                <ScrollView ref={(scrollView) => { scrollerViewApp = scrollView; }}>
                    <ScrollView
                        style={GlobalStyles.scrollView}
                        ref={(scrollView) => { scrollerView = scrollView; }}
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
                                <ImageBackground source={image} {...this.props} style={GlobalStyles.image} />


                            )
                        })
                        }
                    </ScrollView>

                    <View style={styles.navBarContainer}>
                        <View style={styles.navBar}>
                            <Text style={styles.navBarTextOne}>Grand Blue Tower</Text>
                            <View style={styles.navBarImage}>
                                <TouchableOpacity onPress={this.handlecommunityFilterPress}>
                                    <Image source={require('../../../../assets/uploadIcon.png')} style={styles.navBarView} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.handlecommunityFilterPress}>
                                    <Image source={require('../../../../assets/circleIcon.png')} style={styles.navBarView} />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <Text style={styles.navBarTextThree}>AL-TH-3700-3290</Text>
                        <Text style={styles.navBarTextTwo}>AED 4,750,000</Text>
                    </View>

                    <View style={GlobalStyles.housesContainer}>
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
                    <View style={GlobalStyles.housesContainer}>
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

                    <View style={GlobalStyles.propertContainer}>
                        <Text style={styles.propertyType}>
                            Floor Plan
                       </Text>
                        <Image source={require('../../../../assets/floorPlan.png')} style={styles.propertImage} />
                    </View>

                    <Card>
                        <Card.Content>
                            <Title>Payment Plan</Title>
                        </Card.Content>
                    </Card>
                    <View style={GlobalStyles.propertContainer}>
                        <View style={styles.paymentView} />
                    </View>
                    <View style={GlobalStyles.propertContainer}>
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