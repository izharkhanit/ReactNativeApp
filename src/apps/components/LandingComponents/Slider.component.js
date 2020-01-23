'use strict';

import React from 'react';
import {
    View,
    ImageBackground,
    TextInput,
} from 'react-native';


import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Slider = props => {
    const {
        propertyImage,
        handlePress = () => { },
        placeholder,
        onTextChange = () => { },
        value,
        style,
    } = props;

    return (
        <ImageBackground source={{ uri: propertyImage }} style={style.image} >
            <FontAwesomeIcon onPress={handlePress} name="plus-square-o" style={style.filterIcon} size={42} />
            <View style={style.inputContainer}>
                <IonIcon name="ios-search" style={style.searchIcon} size={24} />
                <TextInput
                    placeholder={placeholder}
                    underlineColorAndroid={'transparent'}
                    style={style.input}
                    onChangeText={onTextChange}
                    value={value}
                />
                <FontAwesome5 onPress={handlePress} name="sliders-h" style={style.searchIcon} size={24} />
            </View>
        </ImageBackground>
    );
};


export default Slider;

