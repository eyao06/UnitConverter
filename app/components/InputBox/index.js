/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button, View, Text, TextInput, } from 'react-native';
import styles from './styles.js';

export default class InputBox extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
        style={styles.inputBox}
        keyboardType='numeric'
        placeholder="Enter Value"
        onChangeText={(text) => this.props.setState({text})}
        value={this.props.inputText}
      />
    );
  }
}