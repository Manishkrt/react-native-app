import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const TouchableHighlight = () => {
  return (
    <View>
        <TouchableHighlight>
            <Text style={style.textButton}>Button</Text>
        </TouchableHighlight>
    </View>
  )
}

const style = StyleSheet.create({
    textButton : {

    }
})

export default TouchableHighlight