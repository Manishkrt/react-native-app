import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const TextInputPage = () => {
  const [ name , setName] = useState("");
  const myFunc = ()=>{
    console.log("hit");
  }
  
  return (
    <View > 
        <Text>text Input </Text>
        <Text>My Name is  {name}</Text>


        <TextInput style={style.inputStyle} placeholder="Enter Name" onChangeText={(value)=>setName(value)} value={name}/>
        <Button title="Reset Input" onPress={()=>setName("")} ></Button> 
    </View>
  ) 
}
 
const style = StyleSheet.create({
  inputStyle : {
    borderWidth : 2,
    borderColor : "#aaaaaa", 
    margin : 10,
    paddingLeft : 10
  },
  inputBox : {
    margin : 10
  }
})

export default TextInputPage