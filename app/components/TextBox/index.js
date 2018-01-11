/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button, View, Text, } from 'react-native';

import styles from './styles.js';

export default class TextBox extends Component {
  render() {
    return (
        <View style={styles.textBox}>

        	<Text style={styles.title}> 
        		{this.props.title}
        	</Text>

        	<Text style={styles.text}>
        		{this.props.children}
        	</Text>
        </View>
    );
  }
}