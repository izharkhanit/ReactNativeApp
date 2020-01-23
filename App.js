'use strict';

import React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import RootApp from '././src/root-app/RootApp'

/** So Just for SOLID principles
* This is the main App.js from where before login everything happens here
* Below are my Algo to execute tasks before going to RootApp and doing more code Abstraction
* Algo
* const prod = process.env.NODE_ENV === 'production'

* if (prod && env.SENTRY_DSN) {
*     installSentry()
*      what else required
* }

* Any further thing you want to do, like creating objectURL or heapID

* Register service worker only in prod, remove existing SW's in dev *
 
* if (prod) {
*   require('offline-plugin/runtime').install()
* } else {
*     unregisterAll()
*   }
* const store = call the configuration store
*/

export default class App extends React.Component {

    render() {
        console.disableYellowBox = true;
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
                <RootApp />
            </View>
        );
    }
}