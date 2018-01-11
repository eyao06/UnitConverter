/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button, View, Text, TouchableHighlight, } from 'react-native';
import styles from './styles.js';

export default class ConvertButton extends Component {
  render() {
    return (
    	<TouchableHighlight 
    		onPress={this.props.onPress}
    		underlayColor = 'white'
    		activeOpacity = {0.7}>

	        <View style={styles.button}>
	        	<Text style={styles.buttonText}>
	          		{this.props.title} 
	          	</Text>
	        </View>

        </TouchableHighlight>
    );
  }
}