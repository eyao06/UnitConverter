/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({

  button: {
    margin: 8,
    width: Dimensions.get('window').width / 3 -6,
    height: Dimensions.get('window').width / 3 -6,
    backgroundColor: '#33AAFF',
    borderColor: '#33AAFF',
    borderRadius: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default styles;
