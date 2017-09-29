import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import DetailDish from './DetailDish';
import AboutRestaurant from './AboutRestaurant';

const MainNavigator = StackNavigator({
    Home: { screen:  HomePage},
    DetailDish: { screen: DetailDish },
    AboutRestaurant: { screen: AboutRestaurant},
});

export default MainNavigator;