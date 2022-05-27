import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const { width } = Dimensions.get('window')
const image_width = (height-150)*2/3
const image_height = (height-150)
const im_width = width*0.9
const im_height=im_width*3/2

export default StyleSheet.create({
  card: {
    /*
      Setting the height according to the screen height,
      also could be fixed value orbased on percentage.
      In this example this worked well on Android and iOS.
    */
   
   height: im_height,
   width: im_width,
   justifyContent: 'center',
   alignSelf: 'center',
   borderRadius: 20,
   shadowColor: 'black',
   shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowRadius: 20,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
    resizeMode: "cover"
  },
  photoDescriptionContainer: {
    height: height/25,
    position: 'absolute',
    left: 25,
    bottom: 25,
  },
  flagsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: height/25,
    width: undefined,
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  descriptionButton: {
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    height:'100%',
    width: undefined,
    aspectRatio:3/2,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Avenir',
    textShadowColor: 'blue',
    textShadowRadius: 10,
  },
})
