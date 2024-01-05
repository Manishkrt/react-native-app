import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RadioButtonWithTouchable = () => {
    const [selectedRadio, setSelectedRadio] = useState(1)
  return (
    <View >
        
        <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
            <View style={style.radioWrapper}>
                <View style={style.radio}>
                    {selectedRadio == 1 && <View style={style.radioBg}></View>}
                </View>
                <Text>Radio 1</Text>
            </View> 
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
            <View style={style.radioWrapper}>
                <View style={style.radio}>
                {selectedRadio == 2 && <View style={style.radioBg}></View>}
                </View>
                <Text>Radio 2</Text>
            </View> 
        </TouchableOpacity> 
    </View>
  )
}

const style = StyleSheet.create({
    main : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
    },
    radioText : {
        fontSize : 22
    },
    radio : {
        height : 30,
        width : 30,
        borderColor : 'black',
        borderWidth : 2 ,
        borderRadius : 15,
        margin : 10,  
    },
    radioWrapper : { 
        alignItems : "center",
        flexDirection : 'row', 
        justifyContent : 'center'
    },
    radioBg: {
        backgroundColor : "red",
        width : 20,
        height : 20,
        borderRadius : 10,
        margin : 3 
    }


})

export default RadioButtonWithTouchable