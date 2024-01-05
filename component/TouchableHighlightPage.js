import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

const TouchableHighlightPage = () => {
  return (
    <View>
        <TouchableHighlight>
            <Text style={[style.textButton, style.buttonPrimary]}>Button</Text>
        </TouchableHighlight> 
        <TouchableHighlight>
            <Text style={[style.textButton, style.buttonSuccess]}>Button</Text>
        </TouchableHighlight> 
    </View>
  )
}

const style = StyleSheet.create({
    textButton : {
      color : 'white',  
      fontSize : 20,
      textAlign : 'center',
      margin : 10,
      padding : 10,
      borderRadius : 8 
    },
    buttonPrimary : {
      backgroundColor : "blue"
    },
    buttonSuccess : {
      backgroundColor : "green"
    }

})

export default TouchableHighlightPage