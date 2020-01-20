import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const rowWidth = (screenWidth - 3 * itemSpacing) / 2;
const aspectRatio = 3 / 4;

const Property = props => {
    const {
        propertyData = {},
        handlePress,
        isPropertyDisplay,
    } = props;
    const handlePropertyPress = () => handlePress ? handlePress(propertyData) : null;

    // Styling changes for using common component
    const imageStyle = isPropertyDisplay ? {
        width: screenWidth,
        height: screenWidth / aspectRatio,
    } : {};
    const containerStyle = isPropertyDisplay ? { paddingLeft: 0 } : {};
    const elmStyle = isPropertyDisplay ? { paddingLeft: 15 } : {};

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableWithoutFeedback
                onPress={handlePropertyPress}
            >
                {/* <View style={styles.propertContainer}>
                    <Text style={styles.propertyType}>
                        Studio
                       </Text>
                    <Image source={require('../../../assets/img-1.jpg')} style={styles.propertImage} />
                    <FontAwesome5 name="star" style={styles.filterIcon} size={30} color="white" />

                    <Text style={styles.propertyPrice}>
                        <Text style={{ fontSize: 10 }}>From </Text>AED <Text style={{ color: '#71a6d4' }}>4,750,000</Text>
                    </Text>
                </View> */}
            </TouchableWithoutFeedback>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingLeft: itemSpacing,
        backgroundColor: '#ffffff',
    },
});

export default Property;

