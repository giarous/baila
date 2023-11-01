'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, Dimensions
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import CheckboxFormX from 'react-native-checkbox-form';
import { ScrollView } from 'react-native-gesture-handler';
import {photoCards}  from './constants';


const { height } = Dimensions.get('window')
const image_width = (height-150)*2/3
const image_height = (height-150)

type Props = {};
export default class CardSelection extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      checkedData: [false,true,true],
      data: this.props.navigation.state.params.cardsDataTemp,
      image_source: require('./assets/checked2.png'),
      image_source_arr: [
        require('./assets/checked2.png'),
        require('./assets/unchecked2.png'),
        require('./assets/checked.png'),
        require('./assets/unchecked.png')],
      
    }
  }
    componentDidMount() {
      };

      buttonPressed2= (index) => {
        console.log(this.state.checkedData);
        const newArray = [...this.state.checkedData];
        newArray[index]=!newArray[index];
        this.setState({ checkedData: newArray });
        console.log(this.state.checkedData);
        console.log(this.state.data[0]);
        console.log(this.state.data[0].name);
      }
      
      changeSelection= (index) => {
        console.log(this.state.data);
        const newArray = [...this.state.data];
        newArray[index].state=!newArray[index].state;
        this.setState({ data: newArray });
        console.log(this.state.data);
        console.log(this.state.data[index]);
      }

      goHome = () => {
        this.props.navigation.replace(
          'Home', {cardsDataTemp: this.state.data});
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
                <Text style={styles.title}>Cards' Selection</Text>
              </View>
        <View style={styles.scrollview}>
         <View style={styles.columnContainer}>
         <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('0')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/barman.png')}/>
            {this.state.data[0].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('1')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/buddy.png')}/>
            {this.state.data[1].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('2')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/category.png')}/>
            {this.state.data[2].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('3')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/celebrity.png')}/>
            {this.state.data[3].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('4')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/chain.png')}/>
            {this.state.data[4].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('5')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/chin_king.png')}/>
            {this.state.data[5].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('6')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/choose_who_drinks.png')}/>
            {this.state.data[6].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        </View>
        <View style={styles.columnContainer}>
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('7')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/cocktail.png')}/>
            {this.state.data[7].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('8')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/confiscate.png')}/>
            {this.state.data[8].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('9')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/do_it.png')}/>
            {this.state.data[9].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('10')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/dont_drink.png')}/>
            {this.state.data[10].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('11')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/girls_drink.png')}/>
            {this.state.data[11].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
          
           <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('12')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/guys_drink.png')}/>
            {this.state.data[12].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('13')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/i_have_never.png')}/>
            {this.state.data[13].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        </View>
      
           <View style={styles.columnContainer}>
        
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('14')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/joker.png')}/>
            {this.state.data[14].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('15')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/pour_into_the_cup.png')}/>
            {this.state.data[15].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('16')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/question_king.png')}/>
            {this.state.data[16].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('17')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/rhyme.png')}/>
            {this.state.data[17].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('18')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/rule.png')}/>
            {this.state.data[18].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('19')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/seven.png')}/>
            {this.state.data[19].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('20')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/share.png')}/>
            {this.state.data[20].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
      </View>
      <View style={styles.columnContainer}>
        
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('21')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/taboo.png')}/>
            {this.state.data[21].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('22')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/u_turn.png')}/>
            {this.state.data[22].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('23')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/vip.png')}/>
            {this.state.data[23].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('24')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/waterfall.png')}/>
            {this.state.data[24].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('25')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/yes_man.png')}/>
            {this.state.data[25].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('26')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/yoga.png')}/>
            {this.state.data[26].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        <TouchableOpacity style={styles.choiceContainer} onPress={() => this.changeSelection('27')}>
            <Image style={styles.image_thumb} source={require('./assets/thumbs/you_drink.png')}/>
            {this.state.data[27].state ? <Image style={styles.thumb} source={this.state.image_source_arr[0]}/>
              : <Image style={styles.thumb} source={this.state.image_source_arr[1]}/> }
        </TouchableOpacity>
        
      </View>
     
      </View>
      <TouchableHighlight
                            style = {styles.button}
                            underlayColor= "white"
                            onPress = {this.goHome}
                        >
                        <Text
                            style={styles.buttonText}>
                          Go Back
                        </Text>
          </TouchableHighlight>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flexDirection:'column',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#2a8ab7',
    alignItems: 'stretch'
  },
  titleContainer: {
    height: 80,
    marginHorizontal: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Avenir',
    textShadowColor: 'orange',
    textShadowRadius: 15,
  },
  scrollview: {
    height: height*0.65,
    flexDirection: "row",
    paddingHorizontal: 0,
    alignSelf: 'center',
    width: '94%',
    backgroundColor: '#2a8ab7'
  },
  columnContainer: {
    flex:1,
    alignSelf: 'center',
    backgroundColor: '#2a8ab7',
    alignItems: 'center'
  },


  choiceContainer:{
    marginVertical: 4,
    width: '92%',
    height: undefined,
    marginHorizontal: 0,
    paddingHorizontal:2,
    paddingVertical:2,
    flexDirection:'row',
    flex: 1,
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white', 
    justifyContent: 'space-around'
    
  },

image_thumb: {
  height:'100%',
  width: undefined,
  aspectRatio:2/3,
  backgroundColor:'white',
  resizeMode: 'contain',
  alignSelf: 'center'
},

thumb: {
  marginRight: 0,
  height:'55%',
  width: undefined,
  aspectRatio: 1,
  alignSelf: 'center',
  resizeMode: 'contain'

},
button: {
  height: height/12,
  flexDirection: 'row',
  backgroundColor:'white',
  borderColor: 'orange',
  borderWidth: 2,
  borderRadius: 12,
  marginHorizontal: 80,
  marginBottom: 10,
  marginTop: 20,
  alignSelf: 'stretch',
  justifyContent: 'center'
},

buttonText: {
  fontSize: 20,
  color: 'black',
  fontWeight:'bold',
  textAlign: 'center',
  textAlignVertical: 'center',
  alignSelf: 'center',
  textShadowColor: '#2a8ab7',
  textShadowRadius: 10,
},
});
