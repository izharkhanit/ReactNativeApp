'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import styles from './Filter.component.style';

const Logo = '';
export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleSearchPress = this.handleSearchPress.bind(this);
    }

    handleSearchPress() {
        this.props.navigation.navigate('Search', {
            query: this.state.text,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: Logo }} style={styles.logo} />
                <Text style={[styles.infoText, styles.medium]}>SEARCH PROPERTIES ON <Text style={styles.regular}>PROPERTIES</Text></Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.input}
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <TouchableWithoutFeedback onPress={this.handleSearchPress}>
                    <View style={styles.nextBtn}>
                        <Text style={styles.nextBtnText}>GO Filter</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
