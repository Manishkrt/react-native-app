import React from 'react'
import { Button, Text, View } from 'react-native'

const HomeNavigation = (props) => {
  return (
    <View>
        <Text>Home Screen</Text>
        <Button title='go to about page' onPress={()=>props.navigation.navigate('about')}/>
    </View>
  )
}

export default HomeNavigation