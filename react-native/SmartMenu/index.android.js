/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import MainNavigator from './src/internal/pages/MainNavigator';

export default class SmartMenu extends Component {
  render() {
    return (
        <MainNavigator/>
    );
  }
}

AppRegistry.registerComponent('SmartMenu', () => SmartMenu);
