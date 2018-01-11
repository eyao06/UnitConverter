/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';


import Home from '../routes/Home/index.js';
import UnitConversion from '../routes/UnitConversion/index.js';


const Routes = {
  Home: 	        { screen: Home },
  UnitConversion: 	{ screen: UnitConversion }
};


export default Routes;
