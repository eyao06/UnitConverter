
import { StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({

  textBox: {
  	margin: 2,
  	width: Dimensions.get('window').width / 2 -6,
  	height: Dimensions.get('window').width / 5 -6,
  	justifyContent: 'center',
  	backgroundColor: '#fff',
  },
  title: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  text: {
    textAlign: 'right',
    fontSize: 12,
    color: '#000',
    paddingRight: 5,
  },
});

export default styles;
