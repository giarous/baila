import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image,
} from 'react-native';
import { photoCards} from './constants'

type Props = {};
export default class StartScreen extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      data: photoCards,
    }
  }
    componentDidMount() {
        
        setTimeout(()=>{
            this.props.navigation.replace(
                'Home', {cardsDataTemp: this.state.data});
            }, 1000); 
     
  
      };
  
  render() {
    return (
      <View style={styles.container}>

        <Image
              source={require('./assets/start_screen_2.jpg')} style={styles.thumb}
              />          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'stretch'
  },

  thumb: {
    height: undefined,
    width: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    
  },
});