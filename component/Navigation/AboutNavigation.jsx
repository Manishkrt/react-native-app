import React from 'react'
import { View, Text, Button } from 'react-native'

const AboutNavigation = (props) => {
  return (
    <View>
        <Text>About Screen</Text>
        <Button title='go to about page' onPress={()=>props.navigation.navigate('home')}/>
    </View>
  )
}

export default AboutNavigation