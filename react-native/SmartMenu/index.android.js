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
import HomePage from './src/internal/pages/HomePage';

export default class SmartMenu extends Component {
  render() {
    return (

        <HomePage/>

    );
  }
}

AppRegistry.registerComponent('SmartMenu', () => SmartMenu);
