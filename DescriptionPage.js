'use strict';

import React, { Component } from 'react'
import {
 View, Text, StyleSheet, Image, TouchableHighlight, Dimensions, Alert, TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {photoCards}  from './constants';

const { height } = Dimensions.get('window')
const image_width = (height-150)*2/3
const image_height = (height-150)



type Props = {};
export default class DescriptionComponent extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      checkedData: [false,true,true],
      data: this.props.navigation.state.params.cardsDataTemp,
      
    }
  }
    componentDidMount() {
      console.log('Description Page');
      };

      buttonPressed= (index) => {

      }
      showDescription = (cardName, cardDescription) =>{
        Alert.alert(
          cardName,
          cardDescription,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        )
      }
      
      goHome = () => {
        this.props.navigation.replace(
          'Home', {cardsDataTemp: this.state.data});
      };
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Cards' Description</Text> 
        <ScrollView style={styles.scrollview}>
          <View style={styles.rowContainer}>
        <View style={styles.columnContainer}>
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/barman.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[0].name}</Text>
                <Text style={styles.cardsName}>{photoCards[0].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[0].name, photoCards[0].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[0].name_ru, photoCards[0].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/buddy.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[1].name}</Text>
                <Text style={styles.cardsName}>{photoCards[1].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[1].name, photoCards[1].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[1].name_ru, photoCards[1].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/category.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[2].name}</Text>
                <Text style={styles.cardsName}>{photoCards[2].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[2].name, photoCards[2].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[2].name_ru, photoCards[2].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/celebrity.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[3].name}</Text>
                <Text style={styles.cardsName}>{photoCards[3].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[3].name, photoCards[3].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[3].name_ru, photoCards[3].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/chain.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[4].name}</Text>
                <Text style={styles.cardsName}>{photoCards[4].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[4].name, photoCards[4].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[4].name_ru, photoCards[4].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>    
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/chin_king.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[5].name}</Text>
                <Text style={styles.cardsName}>{photoCards[5].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[5].name, photoCards[5].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[5].name_ru, photoCards[5].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/choose_who_drinks.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[6].name}</Text>
                <Text style={styles.cardsName}>{photoCards[6].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[6].name, photoCards[6].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[6].name_ru, photoCards[6].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View> 
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/cocktail.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[7].name}</Text>
                <Text style={styles.cardsName}>{photoCards[7].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[7].name, photoCards[7].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[7].name_ru, photoCards[7].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/confiscate.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[8].name}</Text>
                <Text style={styles.cardsName}>{photoCards[8].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[8].name, photoCards[8].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[8].name_ru, photoCards[8].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/do_it.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[9].name}</Text>
                <Text style={styles.cardsName}>{photoCards[9].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[9].name, photoCards[9].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[9].name_ru, photoCards[9].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/dont_drink.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[10].name}</Text>
                <Text style={styles.cardsName}>{photoCards[10].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[10].name, photoCards[10].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[10].name_ru, photoCards[10].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/girls_drink.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[11].name}</Text>
                <Text style={styles.cardsName}>{photoCards[11].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[11].name, photoCards[11].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[11].name_ru, photoCards[11].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/guys_drink.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[12].name}</Text>
                <Text style={styles.cardsName}>{photoCards[12].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[12].name, photoCards[12].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[12].name_ru, photoCards[12].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/i_have_never.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[13].name}</Text>
                <Text style={styles.cardsName}>{photoCards[13].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[13].name, photoCards[13].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[13].name_ru, photoCards[13].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  

        </View>
        <View style={styles.columnContainer}>
        <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/joker.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[14].name}</Text>
                <Text style={styles.cardsName}>{photoCards[14].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[14].name, photoCards[14].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[14].name_ru, photoCards[14].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/pour_into_the_cup.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[15].name}</Text>
                <Text style={styles.cardsName}>{photoCards[15].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[15].name, photoCards[15].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[15].name_ru, photoCards[15].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/question_king.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[16].name}</Text>
                <Text style={styles.cardsName}>{photoCards[16].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[16].name, photoCards[16].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[16].name_ru, photoCards[16].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/rhyme.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[17].name}</Text>
                <Text style={styles.cardsName}>{photoCards[17].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[17].name, photoCards[17].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[17].name_ru, photoCards[17].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/rule.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[18].name}</Text>
                <Text style={styles.cardsName}>{photoCards[18].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[18].name, photoCards[18].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[18].name_ru, photoCards[18].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/seven.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[19].name}</Text>
                <Text style={styles.cardsName}>{photoCards[19].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[19].name, photoCards[19].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[19].name_ru, photoCards[19].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/share.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[20].name}</Text>
                <Text style={styles.cardsName}>{photoCards[20].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[20].name, photoCards[20].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[20].name_ru, photoCards[20].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/taboo.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[21].name}</Text>
                <Text style={styles.cardsName}>{photoCards[21].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[21].name, photoCards[21].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[21].name_ru, photoCards[21].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/u_turn.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[22].name}</Text>
                <Text style={styles.cardsName}>{photoCards[22].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[22].name, photoCards[22].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[22].name_ru, photoCards[22].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/vip.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[23].name}</Text>
                <Text style={styles.cardsName}>{photoCards[23].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[23].name, photoCards[23].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[23].name_ru, photoCards[23].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/waterfall.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[24].name}</Text>
                <Text style={styles.cardsName}>{photoCards[24].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[24].name, photoCards[24].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[24].name_ru, photoCards[24].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/yes_man.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[25].name}</Text>
                <Text style={styles.cardsName}>{photoCards[25].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[25].name, photoCards[25].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[25].name_ru, photoCards[25].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/yoga.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[26].name}</Text>
                <Text style={styles.cardsName}>{photoCards[26].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[26].name, photoCards[26].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[26].name_ru, photoCards[26].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>  
          <View style={styles.itemContainer}>
              <Image style={styles.thumb} source={require('./assets/thumbs/you_drink.png')}/>
              <View style={styles.textContainer}>
                <Text style={styles.cardsName}>{photoCards[27].name}</Text>
                <Text style={styles.cardsName}>{photoCards[27].name_ru}</Text>
                <View style={styles.flagsContainer}>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[27].name, photoCards[27].description)}>
                          <Image source={require('./assets/icon_eng.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.descriptionButton} onPress={() => this.showDescription(photoCards[27].name_ru, photoCards[27].description_ru)}>
                          <Image source={require('./assets/icon_ru.png/')} style={styles.icon}/>
                  </TouchableOpacity>
                </View>
              </View>
          </View>    

        </View>
        </View>
      </ScrollView>
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
    justifyContent: 'center',
    backgroundColor: '#2a8ab7',
    alignItems: 'stretch'
  },
  header:{
    height: 80,
    padding: 10,
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
    fontWeight:'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Avenir',
    textShadowColor: 'orange',
    textShadowRadius: 10,
  },

rowContainer: {
  flexDirection: 'row',
    flex:1,
    alignSelf: 'center',
    backgroundColor: '#2a8ab7',
    alignItems: 'center'
  },
  columnContainer: {
    flex:1,
    alignSelf: 'center',
    backgroundColor: '#2a8ab7',
    alignItems: 'center'
  },


  itemContainer: {
    flexDirection:'row',
    backgroundColor: 'white',
    flex: 1,
    padding: 3,
    margin: 5,
    alignItems: 'stretch',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 8
  },

  textContainer:{
    
      flexDirection:'column',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
  },

  scrollview: {
    flexDirection: 'column',
    flex:1,
    alignSelf: 'center',
    width: '95%',
    backgroundColor: '#2a8ab7'
  },

  thumb: {
    height: undefined,
    width: undefined,
    aspectRatio: 2/3,
    resizeMode: 'contain',
},
cardsName: {
  fontSize: 10,
  fontWeight:'bold',
  textAlign: 'center',
  textAlignVertical: 'center',
  textShadowColor: '#2a8ab7',
  textShadowRadius: 5,
  color: 'black',
  alignSelf: 'center'
},

description: {
  fontSize: 10,
  padding: 5,
  
  alignSelf: 'flex-start'
},
flagsContainer: {
  flex:1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  height: height/20,
  width: undefined,
},
descriptionButton: {
  flex:1,
  marginHorizontal: 3,
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
},
icon: {
  height:'100%',
  width: undefined,
  aspectRatio:2/3,
  resizeMode: 'contain',
  alignSelf: 'center'
},
button: {
  height: height/14,
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