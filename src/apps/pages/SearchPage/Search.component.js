'use strict';

import React, { Component } from 'react';

import {
    Text,
    View,
} from 'react-native';

import styles from './Search.component.style';
import Property from '../../components/SearchComponents/Property';
import { FlatList } from 'react-native-gesture-handler';

// This component is just for an example
export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { propertys: null };
        this.handlePress = this.handlePress.bind(this);
        this.fetchPropertys = this.fetchPropertys.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.fetchPropertys();
    }

    handlePress(propertyData) {
        this.props.navigation.navigate('PropertyDisplay', {
            data: propertyData,
        });
    }

    keyExtractor = (item) => item.styleid

    async fetchPropertys() {
        this.setState({
            loading: true,
        });
        const { navigation } = this.props;
        const query = navigation.getParam('query', '');
        let url = `http://developer.hello.com/search/data/${query}`;



        let response = await fetch(url, {
            method: 'GET',
        });
        let responseJson = await response.json();
        this.setState({
            loading: false,
            propertys: responseJson.data.results.propertys,
        });
    }

    renderItem({ index, item }) {
        return (
            <Property
                propertyData={item}
                position={index}
                handlePress={this.handlePress}
            />
        );
    }

    render() {
        if (this.state.loading) {
            return (<View style={styles.container}>
                <Text style={styles.text}> loading... </Text>
            </View>);
        }
        return (
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={this.state.propertys}
                numColumns={2}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                removeClippedSubviews
            />
        );
    }
}