import React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LandingPage from './src/apps/landingpage';
import Search from './src/apps/search';
import ProductDisplay from './src/apps/property-display-page';
import SelectedProperty from './src/apps/property-display-page/selected-property'
import Filter from './src/apps/filters';

export default class App extends React.Component {

    render() {
        console.disableYellowBox = true;
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
                <RootNavigator />
            </View>
        );
    }
}

const RootNavigator = createStackNavigator(
    {
        Home: {
            screen: LandingPage,
            navigationOptions: () => ({
                header: null,
            }),
        },
        Search: {
            screen: Search,
            navigationOptions: () => ({
                title: 'Search',
                headerStyle: {
                    marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
                },
            }),
        },
        ProductDisplay: {
            screen: ProductDisplay,
            navigationOptions: () => ({
                title: 'ProductDisplay',
                headerStyle: {
                    marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,

                },
            }),
        },
        SelectedProperty: {
            screen: SelectedProperty,
            navigationOptions: () => ({
                title: 'EMAAR',
                headerStyle: {
                    marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,

                },
            }),
        },
        Filter: {
            screen: Filter,
            navigationOptions: () => ({
                title: 'Filter',
                headerStyle: {
                    marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
                },
            }),
        },
    },
    {
        initialRouteName: 'Home',
    }
);