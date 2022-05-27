'use strict';
  import React, { Component } from 'react';
  import {View,Text,StyleSheet, TouchableHighlight, Image} from 'react-native';
  import { photoCards} from './constants'
  
  type Props = {};
  var tempDeck=photoCards;
  var filteredDeck=[];
  export default class Home extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        //data: this.props.navigation.state.params.cardsData,
        cardsData: this.props.navigation.state.params.cardsDataTemp,
        finalDeck:[],
      };

    }

   
    openSettings = () => {
      this.props.navigation.replace(
        'Settings', {cardsDataTemp: this.state.cardsData});
    };

    openInstructions= () => {
      this.props.navigation.replace(
        'Descriptions', {cardsDataTemp: this.state.cardsData});
    };

    startNewGame = () => {
      //this.finalizeDeck;
      //this.props.navigation.navigate(
        //'NewGame', {cardsDataTemp: this.state.cardsData});
      this.props.navigation.navigate(
      'NewGame', {cardsDataTemp: this.state.cardsData, finalDeckTemp: filteredDeck});
    };

    goToTemp= () => {
      this.props.navigation.navigate(
        'Temp', {});
    };

    shuffle=(arr) =>{
      var i,j,temp;
      for (i = arr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      return filteredDeck;    
    };

    UNSAFE_componentWillMount(){
      var tempArray=[];
      for(var i=0;i<this.state.cardsData.length;i++){
        if(this.state.cardsData[i].state)
        for( var j=0;j<4;j++){
          tempArray.push(this.state.cardsData[i]);
        }
          
          //console.log(filteredDeck);
      }
      filteredDeck=tempArray;
      console.log(filteredDeck);
  
      
      }
    
    componentDidMount() {
      this.shuffle(filteredDeck);
      //var tempDeck=photoCards;
      //tempDeck=photoCards.concat(photoCards);
      console.log(filteredDeck);

      var cover = {name: '', name_ru:'БАЙЛА',
      photo: require('./assets/baila_start_screen.jpg'),
      description: "Baila is played with at least three persons. The playing cards are laid on the table in the shape of a circle and an empty glass is placed in the middle of it. Every player needs an individual drink. The player next to the dealer takes the first card and puts it faced up in front of himself/herself After that you need to follow the card rules. The game is over when there are no more cards.",
      description_ru:'В эту игру лучше играть трем или более участникам. Карты, следует расположить по кругу. Также понадобится пустой бокал, который ставится в середину расположеных по кругу карт. Игрок рядом с дилером берет первую карту и кладет её на стол так, чтобы все видели. Далее следует выполнить, то, что на карте.',
      state: true};
      setTimeout(()=>{
        filteredDeck.unshift(cover);
        console.log(filteredDeck);
        }, 100);
      
      }

  
    render() {  

      return (
       
          <View style = {styles.container}>
              <View style={styles.titleContainer}>
                <Image source={require('./assets/baila_logo2.png')} style={styles.thumb}/>     
              </View>
              <View style={styles.main}>
              
              <TouchableHighlight
                          style = {styles.button}
                          underlayColor= "white"
                          onPress = {this.startNewGame}
                      >
                      <Text
                          style={styles.buttonText}>
                         Start New Game
                      </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                          style = {styles.button}
                          underlayColor= "white"
                          onPress = {this.openInstructions}
                      >
                      <Text
                          style={styles.buttonText}>
                         Instructions
                      </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                          style = {styles.button}
                          underlayColor= "white"
                          onPress = {this.openSettings}
                      >
                      <Text
                          style={styles.buttonText}>
                         Cards' Selection
                      </Text>
                  </TouchableHighlight>
              
                 
              </View>
            
              
          </View>
          
      )
    }
  }
  
  const styles = StyleSheet.create({
  
    container: {
          flex: 1,
          paddingVertical: 60,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#2a8ab7', 
          alignContent: 'center'
        },

        thumb: {
          flex:1,
          height: undefined,
          width: undefined,
          paddingHorizontal: 20,
          alignSelf: 'stretch',
          resizeMode: 'contain',
          
        },
  
    main: {
        flex: 2, 
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 60
    },
    titleContainer: {
      flex: 2,
      marginHorizontal: 80,
      justifyContent: 'center',
      alignContent: 'center',
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center'
    },

    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#111',
      alignSelf: 'center',
      textShadowColor: '#2a8ab7',
      textShadowRadius: 10,
    },

    textInput: {
      height: 45,
      marginTop: 3,
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: 'white',
      color: '#111'
    },

    button: {
      flex:1,
      backgroundColor:'white',
      borderColor: 'white',
      marginTop: 10,
      marginHorizontal: 50,
      justifyContent: 'center',
      borderColor: 'orange',
      borderWidth: 2,
      borderRadius: 12,
    },
    
  });