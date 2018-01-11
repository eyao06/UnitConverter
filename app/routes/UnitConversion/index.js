/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  Picker,
} from 'react-native';

import TextBox from '../../components/TextBox/index.js';

import styles from './styles.js';

export default class UnitConversion extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '0',
                   unit: 0,
                   unitIndex: 0,};
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });

  render() {

    const { params } = this.props.navigation.state;

    //unit type of the of the input number
    var index = this.state.unitIndex;

    //base value of the input number
    var baseValue = parseFloat(this.state.text) * params.data[index].toBase;

    return (
      
      <View style={{flex:1}}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{height: 50, width:180, textAlign: 'right'}}
            keyboardType='numeric'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
              
          <Picker 
          style={{width:175}}
            selectedValue={this.state.unit} 
            onValueChange={(itemValue, itemIndex) => this.setState({unit: itemValue, unitIndex: itemIndex})}> 

            {params.data.map((item) =>
              <Picker.Item key={item.id}
                           label={item.name + " ( " + item.unit + " ) "} 
                           value={item.name + " ( " + item.unit + " ) "}/> 
            )}

          </Picker>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.container}>

          {params.data.map((item) =>
            <TextBox key={item.id} 
                     title={item.name + " (" + item.unit + ")" + "\n"}>

               {baseValue * item.toTarget}

            </TextBox>
          )}  
          
          </View>
        </ScrollView>

      </View>
    );
  }
}