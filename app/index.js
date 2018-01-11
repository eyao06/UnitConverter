/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import Routes from './config/routes.js'

const Navigator = StackNavigator(Routes);

export default class UnitConverter extends Component {
  render() {

    return (
        <Navigator />
    );
  }
}
