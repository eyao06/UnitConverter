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
} from 'react-native';

import UnitConversionButton from '../../components/Buttons/index.js';
import TextBox from '../../components/TextBox/index.js';
import UnitConversionData from '../../lib/UnitConversions/index.js';

import styles from './styles.js';

export default class Home extends Component {

	//nav bar title
	static navigationOptions = ({
	  	title: `Home`
	});
	
	render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.container}>
          
          {UnitConversionData.map((item) =>
            <UnitConversionButton
                key={item.id}  
                onPress={() => navigate('UnitConversion', {data: item.data, title: item.name})} 
                title={item.name} 
             />
          )}         
          
        </View>

      </ScrollView>
    );
  }
}

