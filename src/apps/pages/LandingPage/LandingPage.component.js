'use strict';

import React, { Component } from 'react';

import {
    View,
    ScrollView,
    Dimensions,
    ActivityIndicator,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProperties } from '../../redux/actions/FetchProperties';
// to do
// import { scrollingBackground } from '../../utils/SlidingUtility';

import Slider from '../../components/LandingComponents/Slider.component';
import PropertyScrollerView from '../../components/LandingComponents/PropertyScrollerView.component';
import PropertySelectView from '../../components/LandingComponents/PropertySelectView.component';


import styles from './LandingPage.component.style';
import GlobalStyles from '../../styles/global.style';


const { width, height } = Dimensions.get('window');
var scrollerView = () => { };
var scrollerViewApp = () => { };

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            placeholder: 'Communities or Properties',
        };
        this.handlecommunityFilterPress = this.handlecommunityFilterPress.bind(this);
        this.selectedPropertyPress = this.selectedPropertyPress.bind(this);
    }


    componentDidMount() {
        if (this.props.fetchProperties()) {
            this.scrollBackground();
        }
    }

    scrollBackground() {
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
            if (scrollerView) { scrollerView.scrollTo({ x: scrollValue, animated: false }); }

        }, 4000);
        if (scrollerViewApp) { scrollerViewApp.scrollTo({ animated: false }); }
    }

    handlecommunityFilterPress() {
        this.props.navigation.navigate('Search', {
            query: this.state.text,
        });
    }
    selectedPropertyPress() {
        this.props.navigation.navigate('SelectedPropertyDisplay', {
            query: this.state.text,
        });
    }

    render() {
        const { properties, isFetching } = this.props.properties;
        if (isFetching) {
            return (
                <View style={styles.fetchView}>
                    <ActivityIndicator size={'large'} />
                </View>
            )
        } else {
            return (
                <ScrollView ref={(scrollView) => { scrollerViewApp = scrollView; }}>
                    {/* BackgroundImaqge Slider, Icon, and textboxInput Component */}
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
                        {properties.map((property) => {
                            return (
                                <Slider
                                    propertyImage={property.propertyImage}
                                    handlePress={this.handlecommunityFilterPress}
                                    placeholder={this.state.placeholder}
                                    onTextChange={text => this.setState({ text })}
                                    value={this.state.text}
                                    style={GlobalStyles}
                                />
                            )
                        })
                        }
                    </ScrollView>
                    {/* Horizontal Property Scroll View component */}
                    <View style={GlobalStyles.housesContainer}>
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
                            {properties.map((property) => {
                                return (
                                    <PropertyScrollerView
                                        propertyImage={property.propertyImage}
                                        propertyName={property.propertyName}
                                        style={GlobalStyles} />
                                )
                            })
                            }
                        </ScrollView>

                        {/*  vertical property details with image display scroll view */}
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {properties.map((property) => {
                                return (
                                    <PropertySelectView
                                        style={styles}
                                        globalstyle={GlobalStyles}
                                        propertyType={property.propertyType}
                                        propertyImage={property.propertyImage}
                                        propertyPrice={property.propertyPrice}
                                        onPress={this.selectedPropertyPress}
                                    />
                                )
                            })
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        properties: state.properties
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchProperties }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
