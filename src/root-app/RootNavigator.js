import { createStackNavigator } from 'react-navigation';
import { StatusBar, Platform } from 'react-native';
'use strict';

import LandingPage from '../apps/pages/LandingPage/LandingPage.component';
import Search from '../apps/pages/SearchPage/Search.component';
import SelectedPropertyDisplay from '../apps/pages/SelectedPropertyDisplayPage/SelectedPropertyDisplay.component';
import Filter from '../apps/pages/FilterPage/Filter.component';

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
        SelectedPropertyDisplay: {
            screen: SelectedPropertyDisplay,
            navigationOptions: () => ({
                title: 'PROPERTY',
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

export default RootNavigator;