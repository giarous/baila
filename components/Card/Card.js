import React from 'react'
import { View, Text, Image, ImageSourcePropType, TouchableOpacity, Alert} from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './Card.styles'

const showDescription = (cardName, cardDescription) =>{
  Alert.alert(
    cardName,
    cardDescription,
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  )
}

const Card = ({ card }) => (
  <View
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={card.photo}
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}`}
      </Text>
    </View>
    <View style={styles.flagsContainer}>
      <TouchableOpacity style={styles.descriptionButton} onPress={() => showDescription(card.name, card.description)}>
              <Image
                source={require('./icon_eng.png/')} style={styles.icon}
                />
      </TouchableOpacity>
      <TouchableOpacity style={styles.descriptionButton} onPress={() => showDescription(card.name_ru, card.description_ru)}>
              <Image
                source={require('./icon_ru.png/')} style={styles.icon}
                />
      </TouchableOpacity>
    </View>
    
  </View>
)

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
}

export default Card
