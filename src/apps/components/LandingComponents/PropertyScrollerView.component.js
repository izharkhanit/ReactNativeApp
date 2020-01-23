'use strict';

import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';

const PropertyScrollerView = props => {
    const {
        propertyImage,
        propertyName,
        style,
    } = props;

    return (
        <View>
            <Image source={{ uri: propertyImage }} style={style.view} />
            <Text style={style.textImage}>
                {propertyName}
            </Text>
        </View>
    );
};


export default PropertyScrollerView;

