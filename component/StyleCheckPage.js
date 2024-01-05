import React from 'react'
import {   Text, View, Button, StyleSheet } from 'react-native';
import exStyle from '../style'

const StyleCheckPage = () => {
  return (
    <View >  
    <Text style={{color : "white", backgroundColor : "gray", padding: 10, marginBottom : 20, fontSize: 20, }}>inline style box</Text>  
    <Text style= {internalStyle.box}>Internal style box</Text>  
    <Text style={exStyle.box}>External style box</Text>   
  </View>
  )
}

const internalStyle = StyleSheet.create({
    box : {
      color : "red",
      backgroundColor : "gray",
      fontSize : 20,
      marginBottom : 30
    }
  })

export default StyleCheckPage