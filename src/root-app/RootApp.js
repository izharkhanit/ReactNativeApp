'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './ConfigureStore';
import { StatusBar, Platform, View } from 'react-native';
import RootNavigator from './RootNavigator';

const store = configureStore();

export default class RootApp extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
                <Provider store={store}>
                    <RootNavigator />
                </Provider>
            </View>
        );
    }
}
