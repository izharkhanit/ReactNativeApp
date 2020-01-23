'use strict';

import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PropertySelectView = props => {
    const {
        propertyImage,
        propertyPrice,
        propertyType,
        style,
        globalstyle,
        onPress,
    } = props;

    return (
        <View style={globalstyle.propertContainer}>
            <Text style={style.propertyType}>
                {propertyType}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: propertyImage }} style={style.propertImage} />
            </TouchableOpacity>
            <FontAwesome5 name="star" style={style.filterIcon} size={30} />

            <Text style={style.propertyPrice}>
                <Text style={style.textSize}>
                    From
                    </Text>
                AED
                    <Text style={style.textColor}>
                    {propertyPrice}
                </Text>
            </Text>
        </View>
    );
};


export default PropertySelectView;

