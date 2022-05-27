import React, { useRef, Component, useState} from 'react'
import { View, Text, Alert, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { photoCards} from './constants'
import { Card, IconButton, OverlayLabel} from './components'
import styles from './App.styles'
import { withNavigation } from 'react-navigation';
console.log('Deck Component');


const DeckComponent = ({navigation}) => {

  const useSwiper = useRef(null).current
  const handleOnSwipedLeft = () => useSwiper.swipeLeft()
  const handleOnSwipedTop = () => useSwiper.swipeTop()
  const handleOnSwipedRight = () => useSwiper.swipeRight()

  /*const newLog = (card_index)=>{
    console.log(card_index)
    console.log(finalDeck[card_index].description)
  }
  const newLog2 = ()=>{console.log('My log')}*/
  //const tempData = photoCards;
  const cardsData = navigation.state.params.cardsDataTemp;
  const finalDeck = navigation.state.params.finalDeckTemp;
  //console.log(navigation.state.params.randomize);
  const goHome = () => {
    navigation.replace(
      'Home', {cardsDataTemp: cardsData});
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          containerStyle={styles.container}
          cards={finalDeck}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          backgroundColor="white"
          stackSize={2}
          infinite={false}
          showSecondCard
          onSwipedAll={goHome}   
        >
          
        </Swiper>
      </View>
     
      
    </View>
  )
}

export default DeckComponent
