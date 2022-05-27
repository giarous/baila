import React from 'react';
//import 'react-native-gesture-handler';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import Home from './Home';
import CardSelection from './CardSelection';
import DeckComponent from './Deck';
import StartScreen from './StartScreen';
import DescriptionComponent from './DescriptionPage';

'use strict';
type Props = {}; 

const App = createAppContainer(createStackNavigator({

  Start: { 
    screen: StartScreen, 
    navigationOptions: { title: "Cure for Maska's insomnia :D" }
  },
  Home: { 
    screen: Home, 
    navigationOptions: { title: "Cure for Maska's insomnia :D" }
  },
  Settings: {
    screen: CardSelection,
    navigationOptions: {title: "Chooe cards" }
  },
  Descriptions: {
    screen: DescriptionComponent,
    navigationOptions: {title: "Chooe cards" }
  },
  NewGame: { 
    screen: DeckComponent, 
    navigationOptions: { title: "New Game" }
  },
  },
  {
    initialRouteName: 'Start',
    mode: 'modal',
    headerMode: 'none'
  }));
export default App;